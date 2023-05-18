import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const QuantitySelection = () => {
  const {state} = useLocation();
  const nav = useNavigate();

  // console.log({state});
  const [ticketCount, setTicketCount] = useState(0);

  const handleTicketChange = (event) => {
    const newTicketCount = parseInt(event.target.value);
    setTicketCount(newTicketCount);
  };

  return (
    <>
    <div className='container'>
      <div className="ticket-selection">
        <h2 className="title">Select the Number of Tickets</h2>
        <select
          className="ticket-select"
          value={ticketCount}
          onChange={handleTicketChange}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <p className="selected-count">
          You selected <span className="count">{ticketCount}</span> ticket(s).
        </p>

          {ticketCount !== 0 ? (
            <button
              style={{
                backgroundColor: "blue",
                color: "white", 
                padding: "10px",
                right: "25px",
                width: "180px"
              }}
              onClick={() => {
                  nav('/billingInfo', {state : {state, ticketCount}})
                }}
              >
              Continue
            </button>
          ): (
            <button
              style={{
                backgroundColor: "grey",
                color: "white", 
                padding: "10px",
                right: "25px",
                width: "180px",
              }}
              onClick={() => {
                  alert("Please select number of tickets")
                }}
              disabled
              >
              Continue
            </button>
          )}

      </div>
    </div>

    </>
  );
};

export default QuantitySelection;