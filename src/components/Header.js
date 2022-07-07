import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import UserContext from "./Helpers/Context";
import Sidebar from "./Sidebar";
import logo from "../assets/logo.png";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const Navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#116534",
        }}
      >
        <Toolbar sx={{ p: 1 }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 5 }}
          >
            PTCL Field Assistant
          </Typography>
          {user && (
            <Button
              sx={{ mr: 50 }}
              variant="contained"
              color="success"
              onClick={() => {
                setUser((prevState) => !prevState);
                localStorage.clear("user");
                Navigate("/");
              }}
            >
              Logout
            </Button>
          )}
          {user && <Sidebar />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
