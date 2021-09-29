// import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tabs from "@restart/ui/esm/Tabs";
import React from "react";
const MuiNavigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Tabs>
          <Tab label="Item One" value="1" />
        </Tabs>
        <Tabs textColor="secondary" indicatorColor="secondary">
          <Tab label="Item One" value="1" />
        </Tabs>
        <Tabs>
          <Tab label="Item One" value="1" />
        </Tabs>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavigation;
