import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext from "./components/Helpers/Context";
import Header from "./components/Header";
import Home from "./components/Home";
import Map from "./components/Map";
import "./App.css";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={user ? <Map /> : <Home />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
