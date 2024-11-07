

// 'use client'
// import React, { useState } from 'react';

// function SidebarMenu({ categories }) {
//   const [hoveredCategory, setHoveredCategory] = useState(null);
//   const [hoveredSubCategory, setHoveredSubCategory] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     console.log(categories)
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const renderSubCategories = (subCategories, level = 1) => {
//     return (
//       <ul className={`absolute left-full top-0 pl-${level * 2} bg-white shadow-md border p-2 space-y-1 w-64 transition-opacity duration-300`}>
//         {subCategories?.map((subCategory) => (
//           <li
//             key={subCategory.id}
//             className="relative group w-full"
//             onMouseEnter={() => setHoveredSubCategory(subCategory.id)}
//             onMouseLeave={() => setHoveredSubCategory(null)}
           
//           >
//             <a
//               href={subCategory.link}
//               className="flex justify-between bg-green-500  text-gray-600 hover:text-orange-500 px-2"
//             >
//               {subCategory.title}
//             </a>

//             {/* Display nested submenus to the right */}
//             {hoveredSubCategory === subCategory.id &&
//               subCategory.childrens &&
//               subCategory.childrens.length > 0 &&
//               renderSubCategories(subCategory.childrens, level + 1)}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <div className="relative">
//       {/* Toggle button for mobile view */}
//       <button
//         className="lg:hidden p-2 bg-orange-500 text-white rounded-md m-4"
//         onClick={toggleSidebar}
//       >
//         {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
//       </button>

//       {/* Sidebar container */}
//       <div
//         className={`${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } lg:translate-x-0 fixed lg:relative top-0 left-0 z-50 w-64 bg-white shadow-md border-r p-4 h-full transition-transform duration-300 ease-in-out`}
//       >
//         <ul className="space-y-2">
//           {categories?.map((category) => (
//             <li
//               key={category.id}
//               className="relative group"
//               onMouseEnter={() => setHoveredCategory(category.id)}
//               onMouseLeave={() => setHoveredCategory(null)}
//             >
//               <div className="flex items-center justify-between w-full text-gray-700 hover:text-orange-500 px-2">
//                 <div className="flex items-center space-x-2">
                  
//                   <span>{category.title}</span>
//                 </div>
//               </div>

//               {/* Display the subcategories to the right */}
//               {hoveredCategory === category.id &&
//                 category.childrens &&
//                 category.childrens.length > 0 &&
//                 renderSubCategories(category.childrens)}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Overlay for mobile view when sidebar is open */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 lg:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </div>
//   );
// }

// export default SidebarMenu;

'use client'
import React, { useState } from 'react';

function SidebarMenu({ categories }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderSubCategories = (subCategories, level = 1) => {
    return (
      <ul
        className="absolute left-full top-0 bg-white w-64 shadow-md border p-2 space-y-1 transition-opacity duration-300"
        style={{ paddingLeft: `${level * 4}px` }}
      >
        {subCategories?.map((subCategory) => (
          <li
            key={subCategory.id}
            className="relative group"
            onMouseEnter={() => setHoveredItem(subCategory.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a
              href={subCategory.link}
              className="flex justify-between w-full text-gray-600 hover:text-orange-500 px-2"
            >
              {subCategory.title}
            </a>

            {/* Display nested submenus to the right if hovered */}
            {hoveredItem === subCategory.id &&
              subCategory.childrens &&
              subCategory.childrens.length > 0 &&
              <div className="relative">
                {renderSubCategories(subCategory.childrens, level + 1)}
              </div>
            }
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="relative">
      {/* Toggle button for mobile view */}
      <button
        className="lg:hidden p-2 bg-orange-500 text-white rounded-md m-4"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Sidebar container */}
      <div
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:relative top-0 left-0 z-50 w-64 bg-white shadow-md border-r p-4 h-full transition-transform duration-300 ease-in-out`}
      >
        <ul className="space-y-2">
          {categories?.map((category) => (
            <li
              key={category.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(category.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="flex items-center justify-between w-full text-gray-700 hover:text-orange-500 px-2">
                <div className="flex items-center space-x-2">
                  <img src={category.icon} alt={category.title} className="w-5 h-5" />
                  <span>{category.title}</span>
                </div>
              </div>

              {/* Display the subcategories to the right if hovered */}
              {hoveredItem === category.id &&
                category.childrens &&
                category.childrens.length > 0 &&
                <div className="relative">
                  {renderSubCategories(category.childrens)}
                </div>
              }
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for mobile view when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default SidebarMenu;