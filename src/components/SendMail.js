import "./styles/send-mail.css";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

import { useForm } from "react-hook-form";
const SendMail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <div className="send-mail">
      <div className="send-mail-header">
        <h3>New Message</h3>
        <CloseIcon className="send-mail-close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="to"
          type="text"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="send-mail-error">Required</p>}
        <input
          placeholder="subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && <p className="send-mail-error">Required</p>}
        <input
          placeholder="Message..."
          type="text"
          className="send-mail-message"
          {...register("message", { required: true })}
        />
        {errors.message && <p className="send-mail-error">Required</p>}
        <div className="send-mail-options">
          <Button type="submit" className="send-mail-btn">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
