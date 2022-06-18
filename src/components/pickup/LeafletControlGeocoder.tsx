import { FC, useContext, useEffect } from "react";
import { useMap } from "react-leaflet";

export const LeafletControlGeocoder: FC = () => {
  const map = useMap();
  useEffect(() => {
    map.setView([Number(34.5787091), Number(-58.4930211)], 5);
  }, [map]);
  return <></>;
};
