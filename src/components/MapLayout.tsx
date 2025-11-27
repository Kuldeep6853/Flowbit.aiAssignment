import { MapContainer, TileLayer, WMSTileLayer, ZoomControl, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// @ts-expect-error: Leaflet icon hack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const POSITION: [number, number] = [50.9375, 6.9603];

export const MapLayout = () => {
  const featureGroupRef = useRef<L.FeatureGroup>(null);

  const _onCreated = (e: any) => {
    const { layerType, layer } = e;
    if (layerType === "polygon") {
      console.log("Area Created:", layer.toGeoJSON());
    }
  };

  return (
    <div className="h-full w-full relative isolate">
      <MapContainer
        center={POSITION}
        zoom={12}
        scrollWheelZoom={true}
        zoomControl={false}
        className="h-full w-full outline-none"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <WMSTileLayer
          url="https://www.wms.nrw.de/geobasis/wms_nw_dop"
          layers="nw_dop_rgb"
          format="image/png"
          transparent={true}
          opacity={0.0}
        />

        <FeatureGroup ref={featureGroupRef}>
          <EditControl
            position="topright"
            onCreated={_onCreated}
            draw={{
              rectangle: false, // Keep disabled as per previous request
              polygon: {
                allowIntersection: false,
                showArea: true,
                shapeOptions: { color: "#BC784E", weight: 2 },
              },
              polyline: {
                shapeOptions: { color: "#BC784E", weight: 3 },
              },
              circle: false,
              circlemarker: false,
              marker: true,
            }}
          />
        </FeatureGroup>

        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};