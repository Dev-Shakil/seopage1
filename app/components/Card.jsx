
"use client"
import React, { useEffect, useState } from 'react';
import { ImAttachment } from "react-icons/im";
import AttachmentModal from './AttachmentModal';


function Card({ cardId, title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    // Fetch uploaded files for this cardId
    const fetchUploadedFiles = async () => {
      const response = await fetch(`/api/files/${cardId}`);
      const data = await response.json();
      setUploadedFiles(data.files);
    };

    fetchUploadedFiles();
  }, [cardId]);

  const handleUpload = (files) => {
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  

    return(
    <div className="bg-gray-50 w-[300px] p-3 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 mb-2">
        <div className="bg-yellow-300 w-8 h-8 rounded-full"></div>
        <div className="flex-1">
          <div className="text-sm font-semibold">Client Name</div>
          <div className="text-xs text-gray-500">{title}</div>
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
            <ImAttachment /> {uploadedFiles.filter((file) => file.cardId === cardId).length}
          </span>
        </div>
        <div>📅 30-12-2022</div>
      </div>
       <AttachmentModal isOpen={isModalOpen} onClose={closeModal} onUpload={handleUpload} cardId={cardId} />

      </div>
  )
}
export default Card;