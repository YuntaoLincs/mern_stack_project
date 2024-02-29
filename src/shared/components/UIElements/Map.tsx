import { useRef, useEffect } from "react";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import OSM from "ol/source/OSM";
//import { fromLonLat } from "ol/proj";
import "./Map.css";

type MapTypes = {
  className?: string;
  style?: React.CSSProperties;
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
};

const MapT = (props: MapTypes) => {
  const mapRef = useRef<HTMLDivElement>(null);

  const { center, zoom } = props;

  useEffect(() => {
    new Map({
      target: mapRef.current!.id,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        //center: fromLonLat([center.lng, center.lat]),
        center: [0, 0],
        zoom: zoom,
      }),
    });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};

export default MapT;
