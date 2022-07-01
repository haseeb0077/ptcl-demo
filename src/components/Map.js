import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

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
  }, []);

  return (
    <MapContainer
      center={[33.674475, 73.017498]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {userData.length >= 1 &&
        userData.map((user) => {
          return (
            <Marker key={user.id} position={[user.geom_x, user.geom_y]}>
              <Popup>
                <Card details={user.details} img={user.image} />
              </Popup>
            </Marker>
          );
        })}
    </MapContainer>
  );
};

export default Map;
