import Column from "./components/Column";
import SidebarMenu from "./components/SidebarMenu";

export default async function Home() {
  const columns = [
    { id: 1, title: 'Incomplete', color: 'bg-red-500' },
    { id: 2, title: 'To Do', color: 'bg-blue-500' },
    { id: 3, title: 'Doing', color: 'bg-yellow-500' },
    { id: 4, title: 'Under Review', color: 'bg-purple-500' },
    { id: 5, title: 'Completed', color: 'bg-green-500' },
    { id: 6, title: 'Overdue', color: 'bg-orange-500' },
    { id: 7, title: 'Incomplete', color: 'bg-orange-500' },
  ];
  return (
  
  <div className="flex flex-col md:flex-row overflow-x-auto p-4 bg-gray-100 h-screen  md:space-y-0 md:space-x-4">
      {columns.map(column => (
        <Column key={column.id} title={column.title} color={column.color} />
      ))}
    </div>
  );
}
