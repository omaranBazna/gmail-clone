import "./styles/Sidebar.css";
import React from "react";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Inbox";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NearMeIcon from "@mui/icons-material/NearMe";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NoteIcon from "@mui/icons-material/Note";
import SidebarOption from "./SidebarOption";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button startIcon={<Add font-size="large" />} className="sidebar-compose">
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={53} active />
      <SidebarOption Icon={StarIcon} title="Stared" number={23} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={15} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={23} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={12} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={11} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={0} />
    </div>
  );
};

export default Sidebar;
