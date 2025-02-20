import { BellIcon, LogOutIcon, TimerIcon } from "@/assets/svg";
import { Menu, SunMedium } from "lucide-react";

export const TopBar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="shadow-sm p-4 flex justify-between items-center">
      {/* Menu Button (Hidden on Desktop) */}
      <button onClick={toggleSidebar} className="p-2 md:hidden">
        <Menu className="w-6 h-6" />
      </button>

      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="flex gap-2 items-center">
        <SunMedium />
        <img src={TimerIcon} alt="" loading="lazy" />
        <button className="p-2 relative">
          <img src={BellIcon} alt="" loading="lazy" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>
        <img src={LogOutIcon} alt="" loading="lazy" />
      </div>
    </header>
  );
};
