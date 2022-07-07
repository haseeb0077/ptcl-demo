import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Grid, Typography, Box, Paper } from "@mui/material";
import UserContext from "./Helpers/Context";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const Navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const login = () => {
    if (state.name === "ptcl" && state.password === "ptcl123") {
      setUser((prevState) => !prevState);
      localStorage.setItem("user", user);
      Navigate("/map");
    }
  };

  return (
    <Box component="form" mt={5}>
      <Paper
        sx={{
          width: "400px",
          padding: "30px 64px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        elevation={5}
      >
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}
          padding={2}
        >
          <Grid item xs={12}>
            <Grid container direction="row" spacing={2} alignItems="center">
              <Grid item>
                <Typography variant="body1">User Name</Typography>
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="User Name"
                  size="small"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                  color="success"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="row" spacing={2} alignItems="center">
              <Grid item>
                <Typography variant="body1">Password</Typography>
              </Grid>
              <Grid item ml={1}>
                <TextField
                  variant="outlined"
                  label="Password"
                  size="small"
                  name="password"
                  type="password"
                  value={state.password}
                  onChange={handleChange}
                  color="success"
                  onKeyPress={(event) => {
                    if (event.code === "Enter") login();
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          onClick={login}
          onKeyDown={(e) => {
            if (e.key === "Enter") login();
          }}
          color="success"
          size="small"
          sx={{
            width: "100px",
            marginLeft: 2,
          }}
        >
          <Typography sx={{ textDecoration: "none" }} color="black">
            Login
          </Typography>
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
