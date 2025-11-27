# Map Area of Interest Tool

A modern, React-based mapping application designed for defining geographical "Areas of Interest" (AOI). This tool features a custom sidebar workflow, interactive vector drawing tools, and WMS layer integration, built with a specific cream & terracotta design system.

## 🚀 Features

* **Interactive Map**: Built with [Leaflet](https://leafletjs.com/) and `react-leaflet`.
* **Vector Drawing Tools**: Custom-styled toolbar to draw Polygons, Polylines, and Markers to define regions.
* **Sidebar Workflows**:
    * **Main Menu**: Navigation and options.
    * **Search Interface**: Location search with suggestion dropdowns.
    * **Project Scope**: Hierarchical tree view for managing selected areas.
* **WMS Integration**: Configured to consume WMS layers (Digital Orthophotos NRW).
* **Custom UI/UX**:
    * Glassmorphism navigation rail.
    * Floating action buttons for map tools.
    * Tailwind CSS styling matching a specific design specification.

## 🛠️ Tech Stack

* **Framework**: [React](https://react.dev/) (v18+) with [TypeScript](https://www.typescriptlang.org/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [clsx](https://github.com/lukeed/clsx)
* **Mapping**:
    * `leaflet`
    * `react-leaflet`
    * `leaflet-draw` & `react-leaflet-draw`
* **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/map-aoi-tool.git](https://github.com/your-username/map-aoi-tool.git)
    cd map-aoi-tool
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  Open your browser to `http://localhost:5173`.

## 📁 Project Structure

```text
src/
├── components/
│   ├── LayerPanel.tsx      # (Optional) WMS/Feature toggle panel
│   ├── MapLayout.tsx       # Main Leaflet map & Drawing logic
│   ├── NavigationRail.tsx  # Left vertical glassmorphism nav
│   └── SidebarPanel.tsx    # State-driven drawer (Menu -> Search -> Scope)
├── App.tsx                 # Layout composition & global state
├── main.tsx                # Entry point
└── index.css               # Global styles & Leaflet Draw overrides