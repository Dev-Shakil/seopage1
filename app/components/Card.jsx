import React from 'react';

function Card() {
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
          <span>🔄 25</span>
        </div>
        <div>📅 30-12-2022</div>
      </div>
    </div>
  );
}

export default Card;
// import React from 'react';

// function Card() {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md space-y-2">
//       {/* Header with client and assignee info */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-2">
//           <img src="https://via.placeholder.com/24" alt="Client Avatar" className="w-6 h-6 rounded-full" />
//           <span className="text-sm font-semibold">Client Name</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <img src="https://via.placeholder.com/24" alt="Assignee Avatar" className="w-6 h-6 rounded-full" />
//           <span className="text-sm font-semibold">Sadik Istiak</span>
//         </div>
//       </div>
      
//       {/* Task Description */}
//       <div className="flex items-center space-x-2">
//         <div className="text-gray-500 text-sm">
//           <p className="truncate">Lorem ipsum dolor sit amet curn...</p>
//         </div>
//         <div className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-md">
//           1/2
//         </div>
//       </div>
      
//       {/* Footer with icons and date */}
//       <div className="flex items-center justify-between text-gray-500 text-xs">
//         <div className="flex -space-x-2">
//           <img src="https://via.placeholder.com/24" alt="Avatar 1" className="w-6 h-6 rounded-full border-2 border-white" />
//           <img src="https://via.placeholder.com/24" alt="Avatar 2" className="w-6 h-6 rounded-full border-2 border-white" />
//           <div className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-xs font-semibold">
//             12+
//           </div>
//         </div>
//         <div className="flex items-center space-x-2">
//           <div className="flex items-center space-x-1">
//             <i className="fas fa-comment-alt"></i>
//             <span>15</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <i className="fas fa-paperclip"></i>
//             <span>25</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <i className="fas fa-calendar-alt"></i>
//             <span>30-12-2022</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;