import "./styles/Sidebar.css";
import React from "react";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Inbox";
import SidebarOption from "./SidebarOption";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button startIcon={<Add font-size="large" />} className="sidebar-compose">
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={53} />
      <SidebarOption Icon={StarIcon} title="Stared" number={23} />
    </div>
  );
};

export default Sidebar;
