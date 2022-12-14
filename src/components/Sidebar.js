import "./styles/Sidebar.css";
import React from "react";
import { Button, IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Inbox";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NearMeIcon from "@mui/icons-material/NearMe";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NoteIcon from "@mui/icons-material/Note";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import SidebarOption from "./SidebarOption";
import Section from "./Section";
import { OpenSendMessage } from "../app/features/mailSlice";
import { useDispatch } from "react-redux/es/exports";
const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<Add font-size="large" />}
        className="sidebar-compose"
        onClick={() => {
          dispatch(OpenSendMessage());
        }}
      >
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={53} active />
      <SidebarOption Icon={StarIcon} title="Stared" number={23} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={15} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={23} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={12} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={11} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />
      <div className="sidebar-footer">
        <div className="sidebar-footer-icons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
