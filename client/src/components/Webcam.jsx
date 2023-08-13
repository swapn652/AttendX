import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';
import axios from 'axios'

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
    const labels = ['Swapnil', 'Akshay'];
    const descriptions = [];
  
    await Promise.all(
      labels.map(async (label) => {
        try {
          const response = await axios.get(`/api/getCloudinaryImages/${label}/2`); // Fetch 2 images for each label
          const imageUrls = response.data.images;
  
          for (const imgUrl of imageUrls) {
            const img = await faceapi.fetchImage(imgUrl);
            const detections = await faceapi
              .detectSingleFace(img)
              .withFaceLandmarks()
              .withFaceDescriptor();
            descriptions.push(detections.descriptor);
          }
        } catch (error) {
          console.error(error);
        }
      })
    );
  
    // Create labeled face descriptors
    const labeledFaceDescriptors = [];
    let currentIndex = 0;
  
    labels.forEach((label) => {
      const numImages = 2; // Number of images for each label
      const descriptors = descriptions.slice(currentIndex, currentIndex + numImages);
      currentIndex += numImages;
      labeledFaceDescriptors.push(new faceapi.LabeledFaceDescriptors(label, descriptors));
    });
  
    return labeledFaceDescriptors;
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
 