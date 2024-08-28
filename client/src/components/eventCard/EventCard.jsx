import React from 'react'
import { Link } from "react-router-dom";
import "./eventCard.scss"

function EventCard({image, title , location ,  date , time , id }) {
    return (
        <Link to={`/${id}`} className="event-card">
            <img src={image} alt={title} className="event-image" />
            <div className="event-details">
                <h3 className="event-title">{title}</h3>
                <p className="event-location">{location}</p>
                <div className="event-timing">
                    <p className="event-date">{date}</p>
                    <p className="event-time">{time}</p>
                </div>
            </div>
        </Link>
    );
}

export default EventCard