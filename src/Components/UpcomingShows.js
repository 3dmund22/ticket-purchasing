import React, { useState, useEffect } from 'react';
import { upcomingShowsData } from '../Assets/showData';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import QuantitySelection from './QuantitySelection';

const UpcomingShowsList = () => {
  const [upcomingShows, setUpcomingShows] = useState([]);
  const [viewState, setViewState] = useState();

  const nav = useNavigate();

  useEffect(() => {
    const fetchUpcomingShows = async () => {
      try {
        // Simulated API call
        // const response = await fetch('/api/upcoming-shows');
        // const data = await response.json();

        //Static data
        const data = upcomingShowsData;

        setUpcomingShows(data);
      } catch (error) {
        console.error('Error fetching upcoming shows:', error);
      }
    };

    fetchUpcomingShows();
  }, []);

  return (
    <div className='container'>
      <h2>Upcoming Shows</h2>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        {upcomingShows.length === 0 ? (
          <p style={{margin: "0 auto"}}>No upcoming shows</p>
        ) : (
          <>
              {upcomingShows.map((show) => (
                <div className='movieList' key={show.id}>
                  <h4>{show.title}</h4>
                  <p>Date: {show.date}</p>
                  <p>Venue: {show.venue}</p>
                  <p>Price: {show.price}</p>
                  <button 
                    style={{backgroundColor: "#88EC71", color:"white", padding: "6px", borderRadius: '5px'}}
                    onClick={() => {
                      nav('/selectQuantity', {state : show})
                    }}
                  >
                    Buy Tickets
                  </button>
                </div>
              ))}
          {/* </div> */}
          </>
        )}
      </div>
    </div>
  );
};

export default UpcomingShowsList;