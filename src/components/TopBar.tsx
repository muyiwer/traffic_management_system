import { Bell, Menu } from "lucide-react";

export const TopBar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Menu Button (Hidden on Desktop) */}
      <button onClick={toggleSidebar} className="p-2 md:hidden">
        <Menu className="w-6 h-6" />
      </button>

      <h1 className="text-xl font-semibold">Admin Dashboard</h1>

      {/* Notification Icon */}
      <button className="p-2 relative">
        <Bell className="w-6 h-6" />
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
          3
        </span>
      </button>
    </header>
  );
};
