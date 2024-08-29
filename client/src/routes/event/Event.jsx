import React from "react";
import "./event.scss";
import EventMap from "../../components/eventMap/EventMap";
import EventsList from "../../components/eventsList/EventsList";
import { Button } from "@mui/material";

const items = [
  {
    image: "https://images.quicket.co.za/0620352_247_247.png",
    title: "PADSTAL TALENT (ROUND 1)",
    location: "Padstal",
    date: "Thursday 29 August 2024",
    time: "20:00",
    id: "1126",
    latitude: -25.7479,
    longitude: 28.2293,

    user: {
      username: "Jakaza The Pro",
    },
  },
];

function Event() {
  return (
    <div className="event">
      <div className="imageContainer">
        <img src="https://images.quicket.co.za/0633658_0.jpeg" alt="" />
      </div>

      <div className="eventDetails">
        <div className="organizer">
          <div className="box">
            <h2>{items[0].title} R350</h2>

            <Button variant="contained" color="success">
              BUY TICKET
            </Button>
          </div>

          <p>By {items[0].user.username}</p>

          <div className="about">
            <h3>ABOUT</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              perspiciatis excepturi ut. Officiis, incidunt voluptatem.
            </p>
          </div>
        </div>
        <div className="mapContainer">
          <EventMap />
        </div>
      </div>

      <div className="eventContainer">
        <EventsList />
      </div>
    </div>
  );
}

export default Event;
