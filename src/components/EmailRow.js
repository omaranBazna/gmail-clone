import "./styles/email-row.css";
import React from "react";

const EmailRow = ({ id, title, subject, description, time }) => {
  return (
    <div className="email-row">
      <div className="email-row-options"></div>
      <div className="email-row-title"></div>
      <div className="email-row-message"></div>
      <div className="email-row-description"></div>
    </div>
  );
};

export default EmailRow;
