import React from 'react';
import { useLocation } from 'react-router-dom';

const ShowDetails = ({ show }) => {
  const {state} = useLocation;
  console.log(state)
  return (
    <div>
      <h2>Show Details</h2>
      <h3>{show?.title}</h3>
      <p>Date: {show?.date}</p>
      <p>Venue: {show?.venue}</p>
      <p>Price: {show?.price}</p>
    </div>
  );
};

export default ShowDetails;