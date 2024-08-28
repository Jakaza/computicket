import React from 'react'
import "./events.scss"
import SearchBar from '../../components/searchBar/SearchBar'


import { events } from "../../lib/dummyData.js"
import EventCard from '../../components/eventCard/EventCard.jsx'



function Events() {
  return (
    <div className='eventsConatiner'>
      <div className="eventsFilter">
        <SearchBar hide={true} />

        <ul>
          <li>UPCOMING EVENTS</li>

          <label>
            <input
              type="radio"
              value="today"
            />
            Today
          </label>

          <label>
            <input
              type="radio"
              value="weekend"
            />
            This weekend
          </label>
          <label>
            <input
              type="radio"
              value="weekend"
            />
            Next 7 days
          </label>
          <label>
            <input
              type="radio"
              value="weekend"
            />
            Next 30 days
          </label>
          <li>TYPE</li>
          <label>
            <input
              type="checkbox"
              name="online"

            />
            Online event (983)
          </label>

          <label>
            <input
              type="checkbox"
              name="physical"

            />
            Physical event (983)
          </label>
          <li>CITY</li>
          <label>
            <input
              type="checkbox"
              name="online"

            />
           Cape Town 988
          </label>

          <label>
            <input
              type="checkbox"
              name="physical"

            />
        
Pretoria 139
          </label>
          <label>
            <input
              type="checkbox"
              name="online"

            />
          Sandton 135
          </label>

          <label>
            <input
              type="checkbox"
              name="physical"

            />
            Johannesburg 305
          </label>
          <label>
            <input
              type="checkbox"
              name="online"

            />
            Midrand 44
          </label>
          <li>CATEGORY</li>
          <label>
            <input
              type="checkbox"
              name="online"

            />
            Music 989
          </label>
          <label>
            <input
              type="checkbox"
              name="online"

            />
           Hobbies & Interests 157
          </label>
          <label>
            <input
              type="checkbox"
              name="online"

            />
          Arts & Culture 541
          </label>
          <label>
            <input
              type="checkbox"
              name="online"

            />
          Other 169
          </label>
        </ul>


      </div>
      <div className="events">
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
    </div>
  )
}

export default Events