"use client"
import Column from "./components/Column";
import SidebarMenu from "./components/SidebarMenu";

export default function Home() {
  const columns = [
    { id: 1, title: 'Incomplete', color: 'bg-red-500', cards: [{ id: 'card1-1', title: 'Task 1' }, { id: 'card1-2', title: 'Task 2' }] },
    { id: 2, title: 'To Do', color: 'bg-blue-500', cards: [{ id: 'card2-1', title: 'Task 3' }, { id: 'card2-2', title: 'Task 4' }, { id: 'card2-3', title: 'Task 5' }] },
    { id: 3, title: 'Doing', color: 'bg-yellow-500', cards: [{ id: 'card3-1', title: 'Task 6' }] },
    { id: 4, title: 'Under Review', color: 'bg-purple-500', cards: [{ id: 'card4-1', title: 'Task 7' }, { id: 'card4-2', title: 'Task 8' }] },
    { id: 5, title: 'Completed', color: 'bg-green-500', cards: [{ id: 'card5-1', title: 'Task 9' }, { id: 'card5-2', title: 'Task 10' }, { id: 'card5-3', title: 'Task 11' }, { id: 'card5-4', title: 'Task 12' }] },
    { id: 6, title: 'Overdue', color: 'bg-orange-500', cards: [{ id: 'card6-1', title: 'Task 13' }, { id: 'card6-2', title: 'Task 14' }, { id: 'card6-3', title: 'Task 15' }] },
    { id: 7, title: 'Incomplete', color: 'bg-orange-500', cards: [{ id: 'card7-1', title: 'Task 16' }] },
  ];
  return (
  
  <div className="flex flex-col scrollbar-thin md:flex-row overflow-x-auto p-4 bg-gray-100 h-screen  md:space-y-0 md:space-x-4">
      {columns.map(column => (
        <Column key={column.id} title={column.title} color={column.color} cards={column.cards} />
      ))}
    </div>
  );
}
