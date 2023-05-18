import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BillingForm = () => {
  const {state} = useLocation();

  const nav = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('card');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const cardData = [
    {
      cardNumber: 'XXXXXXX',
      cardholderName: 'Person A',
      expirationDate: '03/25',
      cvv: 'XXX',
    },
    {
      cardNumber: 'YYYYYYY',
      cardholderName: 'Person B',
      expirationDate: '05/24',
      cvv: 'XXX',
    }
  ];

  const [billingInfoList, setBillingInfoList] = useState([]);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        setBillingInfoList(cardData)
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCardData();
  }, []);


  const handleAddBillingInfo = () => {
    const newBillingInfo = { cardNumber: '', cardholderName: '', expirationDate: '', cvv: '' };
    setBillingInfoList([...billingInfoList, newBillingInfo]);
  };

  const handleBillingInfoChange = (event, index, field) => {
    const updatedBillingInfoList = [...billingInfoList];
    updatedBillingInfoList[index][field] = event.target.value;
    setBillingInfoList(updatedBillingInfoList);
  };

  const handleRemoveBillingInfo = (index) => {
    const updatedBillingInfoList = [...billingInfoList];
    updatedBillingInfoList.splice(index, 1);
    setBillingInfoList(updatedBillingInfoList);
  };

  return (
    <>
    <div className="billing-container">
      <h2 className="title">Billing Information</h2>

      <div className="payment-method">
        <h3>Select Payment Method:</h3>
        <div style={{display: "flex", justifyContent: 'space-evenly'}}>
          <label>
            <input
            type="radio"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={handlePaymentMethodChange}
          />
            Credit/Debit Card
          </label>
          <label>
            <input
              type="radio"
              value="wallet"
              checked={paymentMethod === 'wallet'}
              onChange={handlePaymentMethodChange}
            />
            Digital Wallet
          </label>
        </div>
      </div>

      {paymentMethod === 'card' ? (
        <div>
          <h3>Credit/Debit Card Details:</h3>
          
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            {billingInfoList.map((billingInfo, index) => (
              <div key={index} >
                <h3>Billing Information {index + 1}</h3>

                <div>Card Number</div>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Card Number"
                  value={billingInfo.cardNumber}
                  onChange={(event) => handleBillingInfoChange(event, index, 'cardNumber')}
                />

                <div>Card Holder Name</div>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Cardholder Name"
                  value={billingInfo.cardholderName}
                  onChange={(event) => handleBillingInfoChange(event, index, 'cardholderName')}
                />

                <div>Expiration Date</div>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Expiration Date"
                  value={billingInfo.expirationDate}
                  onChange={(event) => handleBillingInfoChange(event, index, 'expirationDate')}
                />
                
                <div>CVV</div>
                <input
                  type="text"
                  className="input-field"
                  placeholder="CVV"
                  value={billingInfo.cvv}
                  onChange={(event) => handleBillingInfoChange(event, index, 'cvv')}
                />

                { index >= 0 ? (
                  <button className="remove-btn" onClick={() => handleRemoveBillingInfo(index)}>
                    Remove
                  </button>
                ): null}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h3>Digital Wallet Details:</h3>
          <input type="text" className="input-field" placeholder="Wallet ID" value={'XXxxx111XXXXX'}/>
          <input type="text" className="input-field" placeholder="Security Code" value={'qwerty'} />
        </div>
      )}
      
      {billingInfoList.length < 2 ? (
        <>
          <button className="add-btn" onClick={handleAddBillingInfo}>
            Add Billing Information
          </button>
        </>
      ):(
        <></>
      )}

      <div style={{textAlign: 'center', padding: '20px'}}>
        {billingInfoList !== 0 ? (
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px",
              right: "25px",
              width: "180px"
            }}
            onClick={() => {
              nav('/checkout', { state: {state, billingInfoList} })
            }}
          >
            Continue
          </button>
        ) : (
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

export default BillingForm;
