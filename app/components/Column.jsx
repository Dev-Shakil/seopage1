import React from 'react';
import Card from './Card';

function Column({ title, color }) {
  return (
    <div className="w-full md:w-fit min-w-[18rem] bg-white rounded-lg shadow-lg flex-shrink-0  flex flex-col">
      <div className={`${color} text-white text-lg font-semibold p-2 rounded-t-lg flex justify-between items-center`}>
        <span>{title}</span>
        <span>0</span>
      </div>
      <div className="flex-1 p-2 space-y-2 overflow-y-auto scrollbar-thin">
        {/* Add multiple cards here */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Column;