import React from 'react';

const CostingInfo = ({ quantity, ticketPrice }) => {
  const calculateCost = () => {
    const baseCost = quantity * ticketPrice;
    const fee = baseCost * 0.1; // 10% fee
    return baseCost + fee;
  };

  return (
    <div>
      <h2>Cost Calculation</h2>
      <p>Quantity: {quantity}</p>
      <p>Ticket Price: ${ticketPrice}</p>
      <p>Total Cost: ${calculateCost()}</p>
    </div>
  );
};

export default CostingInfo;