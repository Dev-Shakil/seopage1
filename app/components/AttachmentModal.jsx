// AttachmentModal Component
import React, { useState } from 'react';

const AttachmentModal = ({ isOpen, onClose, onUpload, cardId }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to Array
    setSelectedFiles(files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    selectedFiles.forEach((file) => formData.append("files", file));
    formData.append("cardId", cardId); // Add cardId to the form data
    
    // Call the API to handle file upload
    const response = await fetch("/api/upload-files", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      onUpload(data.files); // Send uploaded files to the parent component
      setSelectedFiles([]);
      alert("Your Files Has Uploaded") // Clear selected files after upload
      onClose(); // Close modal
    } else {
      console.error("File upload failed");
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <h3 className="text-lg font-semibold mb-4">Upload Attachments</h3>
          <form onSubmit={handleSubmit}>
            <input type="file" multiple accept='pdf,jpg,jpeg,png' onChange={handleFileChange} className="mb-4" />
            <button type="submit" className="text-white bg-blue-500 px-3 py-1 rounded">
              Upload Files
            </button>
          </form>
          {selectedFiles.length > 0 && (
              <ul className="mb-4 text-xs text-gray-700">
                {selectedFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            )}
          <button onClick={onClose} className="text-white bg-red-500 px-3 py-1 mt-4 rounded">
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default AttachmentModal;
