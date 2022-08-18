import "./styles/Sidebar.css";
import React from "react";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button startIcon={<Add font-size="large" />} className="sidebar-compose">
        Compose
      </Button>
    </div>
  );
};

export default Sidebar;
