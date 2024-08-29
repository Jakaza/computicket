import React from "react";
import "./sidebar.scss";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>My Tickets</li>
          <li>My Registrations</li>
          <li>My Teams</li>
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
          <li>Account preferences</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
