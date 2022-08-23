import "./styles/send-mail.css";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

import { useForm } from "react-hook-form";
const SendMail = () => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <div className="send-mail">
      <div className="send-mail-header">
        <h3>New Message</h3>
        <CloseIcon className="send-mail-close" />
      </div>
      <form>
        <input
          name="to"
          placeholder="to"
          type="text"
          ref={register({ required: true })}
        />
        <input
          name="subject"
          placeholder="subject"
          type="text"
          ref={register({ required: true })}
        />
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="send-mail-message"
          ref={register({ required: true })}
        />
        <div className="send-mail-options">
          <Button className="send-mail-btn">Send</Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
