import React from "react";
import "./ticket.scss";
import Tabs from "./Tabs";

function TicketContent() {
  return (
    <div className="ticketContent">
      <div className="header">
        <h3>My tickets</h3>
        <p>My account / </p>
      </div>

      <div className="ticketContainer">
        <Tabs />

        <div className="ticks">
          <p>You don't have tickets for any past events.</p>
        </div>
      </div>
    </div>
  );
}

export default TicketContent;
