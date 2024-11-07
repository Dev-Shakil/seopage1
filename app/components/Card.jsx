// import React from 'react';
// import {ImAttachment} from "react-icons/im"
// function Card() {
//   return (
//     <div className="bg-gray-50 w-[300px] p-3 rounded-lg shadow-md">
//       <div className="flex items-center space-x-2 mb-2">
//         <div className="bg-yellow-300 w-8 h-8 rounded-full"></div>
//         <div className="flex-1">
//           <div className="text-sm font-semibold">Client Name</div>
//           <div className="text-xs text-gray-500">Sadik Istiak</div>
//         </div>
//         <span className="text-xs text-gray-400">1/2</span>
//       </div>
//       <p className="text-xs text-gray-700 mb-3">
//         Lorem ipsum dolor sit amet consectetur adipiscing elit.
//       </p>
     
//       <div className="flex justify-between items-center text-gray-400 text-xs">
//       <div className="flex -space-x-2">
//           <img src="https://via.placeholder.com/24" alt="Avatar 1" className="w-6 h-6 rounded-full border-2 border-white" />
//           <img src="https://via.placeholder.com/24" alt="Avatar 2" className="w-6 h-6 rounded-full border-2 border-white" />
//           <div className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-xs font-semibold">
//             12+
//           </div>
//         </div>
//         <div className="flex items-center space-x-2">
//           <span>👥 12+</span>
//           <span>💬 15</span>
//           <span className="flex gap-1 items-center"><ImAttachment/> 25</span>
//         </div>
//         <div>📅 30-12-2022</div>
//       </div>
//     </div>
//   );
// }

// export default Card;
"use client"
import React, { useState } from 'react';
import { ImAttachment } from "react-icons/im";

// Modal Component for Attachments
const AttachmentModal = ({ isOpen, onClose, onUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to Array
    setSelectedFiles(files);
    onUpload(files); // Send selected files to the parent component
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <h3 className="text-lg font-semibold mb-4">Upload Attachments</h3>
          <input type="file" multiple onChange={handleFileChange} className="mb-4" /> {/* Multiple file input */}
          <button onClick={onClose} className="text-white bg-red-500 px-3 py-1 rounded">Close</button>
          <div>
            <h4 className="mt-4 text-sm font-semibold">Selected Files:</h4>
            <ul className="text-xs text-gray-700">
              {selectedFiles.map((file, index) => (
                <li key={index}>
                  {file.name} ({file.name.split('.').pop()})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

// Main Card Component
function Card() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  console.log(uploadedFiles);
  const handleUpload = (files) => {
    setUploadedFiles(files); // Save the selected files
  };

  return (
    <div className="bg-gray-50 w-[300px] p-3 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 mb-2">
        <div className="bg-yellow-300 w-8 h-8 rounded-full"></div>
        <div className="flex-1">
          <div className="text-sm font-semibold">Client Name</div>
          <div className="text-xs text-gray-500">Sadik Istiak</div>
        </div>
        <span className="text-xs text-gray-400">1/2</span>
      </div>
      <p className="text-xs text-gray-700 mb-3">
        Lorem ipsum dolor sit amet consectetur adipiscing elit.
      </p>

      <div className="flex justify-between items-center text-gray-400 text-xs">
        <div className="flex -space-x-2">
          <img src="https://via.placeholder.com/24" alt="Avatar 1" className="w-6 h-6 rounded-full border-2 border-white" />
          <img src="https://via.placeholder.com/24" alt="Avatar 2" className="w-6 h-6 rounded-full border-2 border-white" />
          <div className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-xs font-semibold">
            12+
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span>👥 12+</span>
          <span>💬 15</span>
          <span className="flex gap-1 items-center cursor-pointer" onClick={openModal}>
            <ImAttachment /> 25
          </span>
        </div>
        <div>📅 30-12-2022</div>
      </div>

      {/* Attachment Modal */}
      <AttachmentModal isOpen={isModalOpen} onClose={closeModal} onUpload={handleUpload} />

      {/* Display Uploaded Files */}
      <h4 className="mt-4 text-xs font-semibold">Uploaded Files:</h4>
      <ul className="text-xs text-gray-700">
        {uploadedFiles.map((file, index) => (
          <li key={index}>
            {file.name} ({file.name.split('.').pop()})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;