import "./styles/send-mail.css";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { CloseSendMessage } from "../app/features/mailSlice";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
const SendMail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const colRef = collection(db, "messages");
  const onSubmit = (data) => {
    addDoc(colRef, {
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: serverTimestamp(),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const dispatch = useDispatch();
  return (
    <div className="send-mail">
      <div className="send-mail-header">
        <h3>New Message</h3>
        <CloseIcon
          className="send-mail-close"
          onClick={() => {
            dispatch(CloseSendMessage());
          }}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
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
