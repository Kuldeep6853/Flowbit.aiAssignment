import { NavigationRail } from "./components/NavigationRail";
import { SidebarPanel } from "./components/SidebarPanel";
import { MapLayout } from "./components/MapLayout";

function App() {
  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-gray-100 font-sans">
      
      {/* 1. Navigation Rail */}
      <NavigationRail />
      
      {/* 2. Sidebar Panel */}
      <div className="absolute inset-0 pl-16 z-[1500] pointer-events-none flex">
          <div className="pointer-events-auto h-full shadow-2xl">
            <SidebarPanel />
          </div>
      </div>
      
      {/* 3. Map */}
      <div className="absolute inset-0 z-0">
        <MapLayout />
      </div>

    </div>
  );
}

export default App;