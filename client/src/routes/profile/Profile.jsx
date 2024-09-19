import React from "react";
import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import TicketContent from "../../components/ticket/TicketContent";
import { Route, Routes } from "react-router-dom";
import NewEvent from "../../components/addEvent/NewEvent";
import MyEvent from "../../components/addEvent/MyEvent";

function Profile() {
  return (
    <div className="profile">
      <div className="wrapper">
        <Sidebar />
        <Routes>
              <Route path="/" element={<TicketContent />} />
              <Route path="/new-event" element={<NewEvent />} />
              <Route path="/events" element={<MyEvent />} />
        </Routes>
      </div>
    </div>
  );
}

export default Profile;
