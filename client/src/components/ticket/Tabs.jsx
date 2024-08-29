import React from "react";
import "./tabs.scss";

function Tabs() {
  return (
    <div className="tabs">
      <div className="tab active">UPCOMING</div>
      <div className="tab">PROVISIONAL</div>
      <div className="tab">PAST</div>
    </div>
  );
}

export default Tabs;
