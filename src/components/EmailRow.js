import "./styles/email-row.css";
import { IconButton } from "@mui/material";
import Checkbox from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import React from "react";

const EmailRow = ({ id, title, subject, description, time }) => {
  return (
    <div className="email-row">
      <div className="email-row-options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <div className="email-row-title"></div>
      <div className="email-row-message"></div>
      <div className="email-row-description"></div>
    </div>
  );
};

export default EmailRow;
