import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';

function Webcam() {
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    async function startWebcam() {
      const video = videoRef.current;

      await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      ]);

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      video.srcObject = stream;
    }

    startWebcam();
  }, []);

  useEffect(() => {
    async function recognizeFaces() {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const displaySize = { width: video.width, height: video.height };
      faceapi.matchDimensions(canvas, displaySize);

      const labeledFaceDescriptors = await getLabeledFaceDescriptions();
      const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors);

      video.addEventListener('play', async () => {
        setInterval(async () => {
          const detections = await faceapi
            .detectAllFaces(video)
            .withFaceLandmarks()
            .withFaceDescriptors();

          const resizedDetections = faceapi.resizeResults(
            detections,
            displaySize
          );

          canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

          resizedDetections.forEach((detection) => {
            const result = faceMatcher.findBestMatch(detection.descriptor);
            const box = detection.detection.box;
          
            const drawBox = new faceapi.draw.DrawBox(
              {
                x: box.x,
                y: box.y,
                width: box.width,
                height: box.height,
              },
              {
                label: result.toString(),
              }
            );
            drawBox.draw(canvas);
          });
          
        }, 100);
      });
    }

    recognizeFaces();
  }, []);

  async function getLabeledFaceDescriptions() {
    const labels = ['Swapnil', 'Siddharth'];
    const descriptions = [];

    await Promise.all(
      labels.map(async (label) => {
        for (let i = 1; i <= 2; i++) {
          const img = await faceapi.fetchImage(`./public/labels/${label}/${i}.png`);
          const detections = await faceapi
            .detectSingleFace(img)
            .withFaceLandmarks()
            .withFaceDescriptor();
          descriptions.push(detections.descriptor);
        }
      })
    );

    return Promise.all([
      new faceapi.LabeledFaceDescriptors(labels[0], descriptions.slice(0, 2)),
      new faceapi.LabeledFaceDescriptors(labels[1], descriptions.slice(2)),
    ]);
  }

  return (
    <div style={{ position: 'relative' }}>
  <video ref={videoRef} width="600" height="450" autoPlay />
  <canvas 
    ref={canvasRef}
    width="600"
    height="450"
    style={{ position: 'absolute', top: 0, left: 0 }}
  />
</div>

  );
}

export default Webcam;
 