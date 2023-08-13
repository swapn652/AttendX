import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Webcam() {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [labels, setLabels] = useState([]);

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
        let lastAttendanceMarkedTime = 0;

        setInterval(async () => {
          const currentTime = new Date().getTime();
          if (currentTime - lastAttendanceMarkedTime < 3000) {
            return;
          }

          const detections = await faceapi
            .detectAllFaces(video)
            .withFaceLandmarks()
            .withFaceDescriptors();

          const resizedDetections = faceapi.resizeResults(
            detections,
            displaySize
          );

          canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

          resizedDetections.forEach(async (detection) => {
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

            // Update the canvas position based on the detected face
            canvas.style.top = `${box.y}px`;
            canvas.style.left = `${box.x}px`;

            if (result.label !== 'unknown') {
              try {
                const response = await axios.post('http://localhost:8000/markAttendance', {
                  name: result.label,
                });

                lastAttendanceMarkedTime = new Date().getTime();
                
                setTimeout(() => {
                  toast.success(response.data.message, { autoClose: 3000 });
                }, 100);

              } catch (error) {
                console.error('Failed to mark attendance:', error);
              }
            }
          });
        }, 100);
      });
    }
    recognizeFaces();
  }, []);

  async function fetchStudentNames() {
    try {
      const response = await axios.get('http://localhost:8000/getAllStudentNames');
      const studentNames = response.data.studentNames;
      return studentNames;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async function getLabeledFaceDescriptions() {
    const fetchedLabels = await fetchStudentNames();

    const descriptions = [];
    await Promise.all(
      fetchedLabels.map(async (label) => {
        try {
          const response = await axios.get(`http://localhost:8000/getCloudinaryImages/${label}/2`);
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

    const labeledFaceDescriptors = [];
    let currentIndex = 0;

    fetchedLabels.forEach((label) => {
      const numImages = 2;
      const descriptors = descriptions.slice(
        currentIndex,
        currentIndex + numImages
      );
      currentIndex += numImages;
      labeledFaceDescriptors.push(
        new faceapi.LabeledFaceDescriptors(label, descriptors)
      );
    });

    setLabels(fetchedLabels);

    return labeledFaceDescriptors;
  }

  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
