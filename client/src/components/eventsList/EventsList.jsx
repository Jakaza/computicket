import React from 'react'
import EventCard from '../eventCard/EventCard';

import "./eventList.scss"
import { Link } from 'react-router-dom';

const events = [
    {
        image: 'https://images.quicket.co.za/Q10_247_247.jpg',
        title: 'TYGIELAND-BOSVERKIESING',
        location: 'Laerskool Tygerpoort Skoolsaal',
        date: 'Wednesday 28 August 2024',
        time: '18:00',
        id: "1123"
    },
    {
        image: 'https://images.quicket.co.za/0627823_247_247.png',
        title: 'MOO MOO MENLYN - PAINT & SIP',
        location: 'Moo Moo Menlyn',
        date: 'Thursday 29 August 2024',
        time: '17:30',
         id: "1124"
    },
    {
        image: 'https://images.quicket.co.za/Q2_247_247.jpg',
        title: 'INFUSION (2024 KWARTAAL)',
        location: 'Communitas',
        date: 'Thursday 18 July 2024',
        time: '18:30',
         id: "1125"
    },
    {
        image: 'https://images.quicket.co.za/0620352_247_247.png',
        title: 'PADSTAL TALENT (ROUND 1)',
        location: 'Padstal',
        date: 'Thursday 29 August 2024',
        time: '20:00',
         id: "1126"
    },
];

function EventsList() {
    return (
        <div className="events-list-container">
            <h2 className="events-list-title">UPCOMING PHYSICAL EVENTS IN PRETORIA</h2>
            <div className="events-list">
                {events.map((event, index) => (
                    <EventCard
                        key={index}
                        image={event.image}
                        title={event.title}
                        location={event.location}
                        date={event.date}
                        time={event.time}
                        id={event.id}
                    />
                ))}
            </div>
            <button className="see-more-button">
                <Link to={`/events`}>
                SEE MORE
                </Link>
            </button>
        </div>
    );
}

export default EventsList
