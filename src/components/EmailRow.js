import "./styles/email-row.css";
import { IconButton, Checkbox } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../app/features/mailSlice";
const EmailRow = ({ id, title, subject, description, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(selectMail(id));
  };
  return (
    <div
      className="email-row"
      onClick={() => {
        openMail();
        navigate("../mail", { replace: false });
      }}
    >
      <div className="email-row-options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="email-row-title">{title}</h3>
      <div className="email-row-message">
        <h4>
          {subject}
          <span className="email-row-description">_{description}</span>
        </h4>
      </div>
      <div className="email-row-time">{time}</div>
    </div>
  );
};

export default EmailRow;
