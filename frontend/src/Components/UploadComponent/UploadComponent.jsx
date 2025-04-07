import React, { useState } from 'react';
import './UploadComponent.css';

const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    simulateUpload(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    simulateUpload(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const simulateUpload = (file) => {
    if (file) {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 50) clearInterval(interval); // Simulate 50% progress
      }, 500);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Upload successful');
      } else {
        console.error('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="upload-container">
      <div className="content-wrapper">
        {/* Left Section */}
        <div className="left-section">
          <h2>Add Your Post Here!</h2>
          <p className="subtitle">Let it out or ask for a hand—your words find a home here.</p>
          <div className="instagram-post">
            <div className="post-header">
              <div className="profile-pic" />
              <div className="post-info">Rikki Janae • Wichita, Kansas</div>
            </div>
            <div className="post-content">
              <p>Place your design here!</p>
            </div>
            <div className="post-footer">
              <span className="icon">❤️</span>
              <span className="icon">💬</span>
              <span className="icon">📤</span>
              <span className="icon">🔖</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div
            className="drop-zone"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={() => document.querySelector('.drop-zone').classList.add('dragover')}
            onDragLeave={() => document.querySelector('.drop-zone').classList.remove('dragover')}
          >
            <p>Choose a file or drag & drop it here</p>
            <p>JPEG, PNG, PDF, and MP4 formats, up to 50MB</p>
            <input
              type="file"
              id="fileInput"
              className="file-input"
              accept=".jpg,.jpeg,.png,.pdf,.mp4"
              onChange={handleFileChange}
            />
            <button className="browse-btn" onClick={() => document.getElementById('fileInput').click()}>
              Browse File
            </button>
          </div>
          {selectedFile && (
            <div className="upload-progress">
              <div classFile="file-info">
                <span className="file-type">PDF</span>
                <span className="file-name">my-cv.pdf</span>
                <span className="file-size">60 KB of 120 KB</span>
                <span className="uploading">Uploading...</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${uploadProgress}%` }} />
              </div>
            </div>
          )}
        </div>
      </div>
      <button className="post-btn" onClick={handleUpload} disabled={!selectedFile}>
        Post Now!
      </button>
    </div>
  );
};

export default UploadComponent;