import "./styles/send-mail.css";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
const SendMail = () => {
  return (
    <div className="send-mail">
      <div className="send-mail-header">
        <h3>New Message</h3>
        <CloseIcon className="send-mail-close" />

        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <div className="send-mail-options">
            <Button className="send-mail-btn">Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendMail;
