import "./styles/SidebarOption.css";
import React from "react";

const SidebarOption = ({ Icon, title, number }) => {
  return (
    <div className="sidebar-option">
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOption;
