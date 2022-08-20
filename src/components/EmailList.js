import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { IconButton, Checkbox } from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./styles/emailList.css";
const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList-settings">
        <div className="emailList-setting-left">
          <Checkbox />
          <IconButton>
            <ArrowDownwardIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList-setting-right"></div>
      </div>
    </div>
  );
};

export default EmailList;
