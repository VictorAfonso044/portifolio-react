import * as React from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

export default function HomeBar() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
        </Toolbar>
      </Container>
    </AppBar>
    // </Box>
  );
}
