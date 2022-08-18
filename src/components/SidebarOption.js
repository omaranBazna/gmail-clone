import "./styles/SidebarOption.css";
import React from "react";

const SidebarOption = ({ Icon, title, number, active }) => {
  return (
    <div className={`sidebar-option ${active ? "sidebar-option-active" : ""}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOption;
