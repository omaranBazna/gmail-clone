import React from "react";

import { IconButton, Checkbox } from "@mui/material";
import "./styles/emailList.css";
const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList-settings">
        <div className="emailList-setting-left">
          <Checkbox />
        </div>
      </div>
    </div>
  );
};

export default EmailList;
