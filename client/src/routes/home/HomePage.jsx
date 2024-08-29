import React, { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import EventsList from "../../components/eventsList/EventsList";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="home">
      <div className="searchContainer">
        <SearchBar />
      </div>

      <div className="eventContainer">
        <EventsList />
      </div>
    </div>
  );
}

export default HomePage;
