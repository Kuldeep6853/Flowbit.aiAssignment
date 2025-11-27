import { Home, LayoutGrid, Settings, User } from "lucide-react";

export const NavigationRail = () => {
  return (
    <nav className="absolute left-0 top-0 z-[2000] flex h-full w-16 flex-col items-center justify-between bg-black/40 py-8 backdrop-blur-[2px]">
      <div className="flex flex-col items-center gap-10">
        <div className="h-8 w-8">
           <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12V2Z" fill="#E5E5E5" /><path d="M12 2L22 7L12 12V2Z" fill="#F97316" /></svg>
        </div>

        <div className="flex flex-col gap-8">
          <button className="group flex items-center justify-center">
            <Home className="h-7 w-7 text-[#E8D4A2] transition-colors group-hover:text-white" />
          </button>
          
          <button className="group flex items-center justify-center">
            <LayoutGrid className="h-7 w-7 text-[#E8D4A2] transition-colors group-hover:text-white" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <button className="group flex items-center justify-center">
          <div className="rounded-full border-2 border-[#E8D4A2] p-0.5 group-hover:border-white">
            <User className="h-5 w-5 text-[#E8D4A2] transition-colors group-hover:text-white" />
          </div>
        </button>
        <button className="group flex items-center justify-center">
          <Settings className="h-7 w-7 text-[#E8D4A2] transition-colors group-hover:text-white" />
        </button>
      </div>
    </nav>
  );
};