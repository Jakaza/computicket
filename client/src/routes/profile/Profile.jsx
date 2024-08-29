import React from "react";
import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import TicketContent from "../../components/ticket/TicketContent";

function Profile() {
  return (
    <div className="profile">
      <div className="wrapper">
        <Sidebar />
        <TicketContent />
      </div>
    </div>
  );
}

export default Profile;
