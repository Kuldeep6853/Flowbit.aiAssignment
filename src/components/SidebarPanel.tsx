import { ChevronLeft, ChevronDown, Search, FileUp, Plus, Trash2, Eye, MoreVertical, Play } from "lucide-react";
import { useState } from "react";

export const SidebarPanel = () => {
  // Added "scope" to the allowed views
  const [view, setView] = useState<"menu" | "search" | "scope">("menu");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const suggestions = [
    "City Proper", "Inner City / Downtown", "Districts / Boroughs",
    "Neighborhoods / Quarters", "Metropolitan Area"
  ];

  // Helper to determine the header title based on current view
  const getHeaderTitle = () => {
    if (view === "scope") return "Define Project Scope";
    return "Define Area of Interest";
  };

  return (
    <div className="flex h-full w-80 flex-col border-r border-gray-200 bg-white shadow-xl z-[1000]">
      
      {/* Header */}
      <div className="flex shrink-0 items-center gap-3 border-b border-gray-100 p-5">
        <button 
          onClick={() => {
            if(view === "scope") setView("search");
            else if(view === "search") setView("menu");
          }}
          className="text-gray-400 hover:text-gray-600"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="h-5 w-[1px] bg-gray-300"></div>
        <h2 className="text-[15px] font-medium text-orange-500 tracking-wide">
          {getHeaderTitle()}
        </h2>
      </div>

      {/* VIEW 1: Main Menu */}
      {view === "menu" && (
        <div className="flex-1 overflow-y-auto p-6 animate-in fade-in slide-in-from-left-4 duration-300">
          <p className="mb-4 text-sm font-semibold text-gray-800">
            Define the area(s) where you will apply your object count & detection model
          </p>
          <p className="mb-2 text-xs text-gray-500">Options:</p>
          <button 
            onClick={() => setView("search")}
            className="mb-4 w-full text-left rounded-lg border border-gray-300 bg-stone-50 p-4 transition-all hover:border-orange-300 hover:shadow-sm"
          >
            <div className="flex items-start gap-3">
              <Search className="mt-1 h-5 w-5 text-gray-400" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-700">Search</span>
                <span className="text-sm text-gray-500 leading-tight">
                  for a city, town... <br /> or <span className="font-medium text-gray-700">draw</span> area on map
                </span>
              </div>
            </div>
          </button>
          <button className="flex w-full items-center gap-3 rounded-lg border border-gray-200 bg-stone-50 p-4 text-left transition-colors hover:bg-stone-100">
            <FileUp className="h-5 w-5 text-gray-500" />
            <span className="text-sm text-gray-600">Uploading a shape file</span>
          </button>
        </div>
      )}

      {/* VIEW 2: Search Interface */}
      {view === "search" && (
        <div className="flex flex-1 flex-col p-6 animate-in fade-in slide-in-from-right-4 duration-300 relative">
          <p className="mb-6 text-[15px] text-gray-600 leading-relaxed">
            Search or use vector tool to create your region.
          </p>
          <div className="mb-8 relative">
            <label className="mb-2 block text-sm font-bold text-gray-700">Search Area</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="city, town, region..."
                value={searchQuery}
                onFocus={() => setShowSuggestions(true)}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full rounded-md border border-gray-300 bg-[#FDF6D8] py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>
            {showSuggestions && (
              <div className="absolute top-full left-0 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg z-50 overflow-hidden">
                <div className="bg-white px-4 py-3 text-sm font-bold text-gray-900 border-b border-gray-100">
                  {searchQuery || "Cologne"}
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {suggestions.map((item, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 text-[13px] text-gray-600 hover:bg-orange-50 hover:text-orange-700 transition-colors"
                      onClick={() => {
                         setSearchQuery(`Cologne - ${item}`);
                         setShowSuggestions(false);
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* UPDATED: This button now triggers the 'scope' view */}
          <button 
            onClick={() => setView("scope")}
            className="mb-2 w-full rounded-md bg-[#BC784E] py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#a66842]"
          >
            Apply outline as base image
          </button>
          
          <p className="mb-auto text-xs text-center text-gray-500">
            You can always edit the shape of the area later
          </p>
          <div className="mt-8 pt-4">
             <button disabled className="w-full rounded-md bg-[#D9D9D9] py-3 text-sm font-medium text-gray-500 cursor-not-allowed">
               Confirm Area of Interest
             </button>
          </div>
        </div>
      )}

      {/* VIEW 3: Project Scope (NEW from Screenshot) */}
      {view === "scope" && (
        <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-300">
          
          {/* List Content */}
          <div className="flex-1 p-4 space-y-2">
            
            {/* 1. Select Base Image (Collapsed) */}
            <div className="flex items-center justify-between py-2 text-gray-500 hover:text-gray-700 cursor-pointer">
              <div className="flex items-center gap-2">
                 <Play className="h-3 w-3 fill-current text-gray-400" />
                 <span className="text-[15px]">Select Base Image</span>
              </div>
              <Plus className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="h-[1px] w-full bg-gray-200 my-1"></div>

            {/* 2. Define Area of Interest (Expanded) */}
            <div className="py-2">
               {/* Parent Item */}
               <div className="flex items-center justify-between text-gray-600 mb-3 cursor-pointer">
                  <div className="flex items-center gap-2">
                     <ChevronDown className="h-4 w-4 text-gray-500" />
                     <span className="text-[15px]">Define Area of Interest</span>
                  </div>
                  <Plus className="h-5 w-5 text-gray-600" />
               </div>

               {/* Child Item 1 */}
               <div className="flex items-center justify-between pl-4 pr-1 py-1 group">
                 <div className="flex items-center gap-3">
                    <Play className="h-2 w-2 fill-current text-gray-600" />
                    <div className="h-4 w-4 bg-[#F3E5C2] rounded-sm"></div>
                    <span className="text-sm text-gray-600">Area 1</span>
                 </div>
                 <div className="flex items-center gap-2 text-gray-400">
                    <Trash2 className="h-4 w-4 hover:text-red-500 cursor-pointer" />
                    <Eye className="h-4 w-4 hover:text-blue-500 cursor-pointer" />
                    <MoreVertical className="h-4 w-4 hover:text-gray-600 cursor-pointer" />
                 </div>
               </div>

               {/* Child Item 2 */}
               <div className="flex items-center justify-between pl-4 pr-1 py-1 group mt-2">
                 <div className="flex items-center gap-3">
                    <Play className="h-2 w-2 fill-current text-gray-600" />
                    <div className="h-4 w-4 bg-[#F3E5C2] rounded-sm"></div>
                    <span className="text-sm text-gray-600">Area 2</span>
                 </div>
                 <div className="flex items-center gap-2 text-gray-400">
                    <Trash2 className="h-4 w-4 hover:text-red-500 cursor-pointer" />
                    <Eye className="h-4 w-4 hover:text-blue-500 cursor-pointer" />
                    <MoreVertical className="h-4 w-4 hover:text-gray-600 cursor-pointer" />
                 </div>
               </div>
            </div>

            <div className="h-[1px] w-full bg-gray-200 my-1"></div>

            {/* 3. Define Objects (Collapsed) */}
            <div className="flex items-center justify-between py-2 text-gray-500 hover:text-gray-700 cursor-pointer">
              <div className="flex items-center gap-2">
                 <Play className="h-3 w-3 fill-current text-gray-400" />
                 <span className="text-[15px]">Define Objects</span>
              </div>
              <Plus className="h-5 w-5 text-gray-400" />
            </div>

          </div>

          {/* Footer Box */}
          <div className="p-4 mt-auto">
             <div className="border border-gray-400 rounded-sm p-5 flex flex-col items-center bg-white">
                <span className="text-sm font-medium text-gray-900 mb-3">
                  Scope Definition Finished
                </span>
                <button 
                  className="w-full bg-[#D6CDC6] text-white text-sm py-2 px-4 rounded-sm cursor-pointer hover:bg-[#c4b9b0] text-center"
                >
                  Continue to object(s)<br/> detection workflow
                </button>
             </div>
          </div>
          
        </div>
      )}

    </div>
  );
};