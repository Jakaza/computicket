import React, { useContext } from "react";
import "./sidebar.scss";
import { Button } from "@mui/material";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>My Tickets</li>
          <li>
          <Link to="events" className="link"> View Events</Link>
           </li>
          <li>

          <Link to="new-event" className="link">Add New Event</Link>

          </li>
          <li>Account profile</li>
          <li>API</li>
          <li>Bank accounts</li>
          <li>Change password</li>
          <li>Email preferences</li>
          <li>My saved cards</li>
          <li>My saved events</li>
          <li>Promoter networks</li>
          <li>Vending</li>
          <li>Referrals</li>
          <li>
            <Button onClick={handleLogout} variant="contained" color="error">
              Log out
            </Button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
