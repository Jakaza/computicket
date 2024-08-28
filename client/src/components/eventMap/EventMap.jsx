import React from 'react'
import "./eventMap.scss"
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';

const position = [ -25.7479 , 28.2293 ]

const items = [
    {
        image: 'https://images.quicket.co.za/0620352_247_247.png',
        title: 'PADSTAL TALENT (ROUND 1)',
        location: 'Padstal',
        date: 'Thursday 29 August 2024',
        time: '20:00',
         id: "1126",
         latitude: -25.7479,
         longitude:  28.2293
    },
]

function EventMap() {


  return (
        <MapContainer center={position}  zoom={13} scrollWheelZoom={false}
        className="map" >

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
            {items.map((item) => (
            <Pin item={item} key={item.id} />
        ))}

         
        </MapContainer>

      )
}

export default EventMap
