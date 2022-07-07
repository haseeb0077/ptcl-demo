import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Inc_High, Inc_Medium, Inc_Low } from "./Helpers/Icons";
import Card from "./Card";

const Map = () => {
  const [userData, setUserData] = useState([]);
  const ptclDemo = async () => {
    const res = await axios.get(
      "http://linesquare.ddns.net:8005/ptcl_demo/pointdata"
    );
    console.log(res.data);
    setUserData(res.data);
  };

  useEffect(() => {
    ptclDemo();
  });

  return (
    <>
      <MapContainer center={[29.6082, 74.0854]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {userData.length >= 1 &&
          userData.map((user) => {
            return (
              <Marker
                key={user.id}
                position={[user.geom_x, user.geom_y]}
                icon={
                  user.incident_type === "High"
                    ? Inc_High
                    : user.incident_type === "Medium"
                    ? Inc_Medium
                    : user.incident_type === "Low"
                    ? Inc_Low
                    : ""
                }
              >
                <Popup>
                  <Card
                    type={user.incident_type}
                    details={user.details}
                    lat={user.geom_x}
                    lng={user.geom_y}
                  />
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </>
  );
};

export default Map;
