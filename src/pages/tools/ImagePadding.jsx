/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from 'react';

function ImagePadding() {
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);

  function handleFileChange(event) {
    // Get the file from the input element
    const file = event.target.files[0];

    // Create a FileReader object
    const reader = new FileReader();

    // Set the onload event handler
    reader.onload = (e) => {
      // Set the image data as the src attribute of the Image object
      setImage(e.target.result);
    };

    // Read the file as a data URI
    reader.readAsDataURL(file);
  }

  function handleSave() {
    // Get the canvas and context
    const canvas = canvasRef.current;

    // Get the image data as a data URI
    const blobURL = canvas.toDataURL('image/jpeg');

    // Create a blob URL
    // const blobURL = URL.createObjectURL(dataURI);

    // Create a link element
    const link = document.createElement('a');

    // Set the href attribute of the link to the blob URL
    link.href = blobURL;

    // Set the download attribute of the link to a file name
    link.download = 'image.jpg';

    // Click the link to download the image
    link.click();
  }

  useEffect(() => {
    // Get the canvas and context
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Load the image
    const img = new Image();
    img.src = image;
    img.onload = () => {
      // Get the size of the image
      const { width, height } = img;

      // Calculate the size of the background
      const bgSize = Math.max(width, height) * 1.1;

      // Set the size of the canvas
      canvas.width = bgSize;
      canvas.height = bgSize;

      // Clear the canvas
      ctx.clearRect(0, 0, bgSize, bgSize);
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, bgSize, bgSize);

      // Calculate the position of the image
      const x = (bgSize - width) / 2;
      const y = (bgSize - height) / 2;

      // Draw the image onto the canvas
      ctx.drawImage(img, x, y);
    };
  }, [image]);

  return (
    <>
      <h3>Save image with white padding</h3>
      <input type="file" onChange={handleFileChange} />
      <button type="button" onClick={handleSave} disabled={image === null}>Save</button>
      <canvas ref={canvasRef} />
    </>
  );
}

export default ImagePadding;
