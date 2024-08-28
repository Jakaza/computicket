import React from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import EventsList from '../../components/eventsList/EventsList'

function HomePage() {
  return (
    <div className='home'>
      <div className="searchContainer">
        <SearchBar />
      </div>

      <div className="eventContainer">
        <EventsList/>
      </div>

    </div>
  )
}

export default HomePage