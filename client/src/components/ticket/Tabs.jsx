import React, { useState } from "react";
import "./tabs.scss";

function Tabs() {
  const [activeTab, setActiveTab] = useState("UPCOMING");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <div
        className={`tab ${activeTab === "UPCOMING" ? "active" : ""}`}
        onClick={() => handleTabClick("UPCOMING")}
      >
        UPCOMING
      </div>
      <div
        className={`tab ${activeTab === "PROVISIONAL" ? "active" : ""}`}
        onClick={() => handleTabClick("PROVISIONAL")}
      >
        PROVISIONAL
      </div>
      <div
        className={`tab ${activeTab === "PAST" ? "active" : ""}`}
        onClick={() => handleTabClick("PAST")}
      >
        PAST
      </div>
    </div>
  );
}

export default Tabs;
