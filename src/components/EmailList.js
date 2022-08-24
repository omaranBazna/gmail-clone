import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { IconButton, Checkbox } from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import "./styles/emailList.css";

import InboxIcon from "@mui/icons-material/Inbox";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Section from "./Section";
import EmailRow from "./EmailRow";

import { useEffect } from "react";
const EmailList = () => {
  const [email, setEmail] = useState([]);

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
        <div className="emailList-setting-right">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>{" "}
      <div className="emailList-sections">
        <Section Icon={InboxIcon} title="primary" color="red" selected />
        <Section Icon={PeopleAltIcon} title="Social" color="blue" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      <div className="emailList-list">
        {email.map((el) => {
          <EmailRow
            title={el.to}
            subject={el.subject}
            description={el.subject}
            time={el.timestamp}
          />;
        })}
      </div>
    </div>
  );
};

export default EmailList;
