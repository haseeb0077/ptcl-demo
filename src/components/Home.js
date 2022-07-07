import React from "react";
import { Box } from "@mui/material";
import Login from "./Login";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
      mt={10}
    >
      <img
        src={logo}
        style={{
          height: "100px",
          width: "200px",
        }}
        alt="Logo"
      />
      <Login />
    </Box>
  );
};

export default Home;
