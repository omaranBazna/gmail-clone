import "./styles/SidebarOption.css";
import React from "react";

const SidebarOption = ({ Icon, title, number }) => {
  return (
    <div className="sidebar-option">
      <Icon />
      <p>{title}</p>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOption;
