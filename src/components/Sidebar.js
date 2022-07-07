import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box, Grid, Typography, Stack } from "@mui/material";
import High from "../assets/high.png";
import Medium from "../assets/medium.png";
import Low from "../assets/low.png";

export default function TemporaryDrawer() {
  return (
    <Drawer variant="permanent" anchor="right">
      <Box
        width="350px"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box height="80px" sx={{ backgroundColor: "#262626" }}></Box>
        <Grid
          container
          alignItems="left"
          spacing={5}
          pl={8}
          direction="column"
          pt={10}
        >
          <Grid item mb={3}>
            <Typography variant="h4" color="#116534">
              Incidents Legend
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={4} alignItems="center">
              <img height="80px" src={High} alt="High" alignItems="center" />
              <Typography variant="h5">High</Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={4} alignItems="center">
              <img
                height="80px"
                src={Medium}
                alt="Medium"
                alignItems="center"
              />
              <Typography variant="h5">Medium</Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={4} alignItems="center">
              <img height="80px" src={Low} alt="Low" alignItems="center" />
              <Typography variant="h5">Low</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
}
