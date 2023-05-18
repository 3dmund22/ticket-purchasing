import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { RiVisaLine } from 'react-icons/ri';
import { RiMastercardFill } from 'react-icons/ri';

const Checkout = () => {
  const {state} = useLocation();

  let movieDetails = state.state.state;
  let ticketCount = state.state.ticketCount;
  let billingInfor = state.billingInfoList;
  let serviceFee = 24.00
  let processingFee = 2.00

  let total = (movieDetails.price)* ticketCount;
  let total1 = serviceFee * ticketCount;
  let overallTotal = total + total1 + processingFee;

  const nav = useNavigate();

  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [billingInfo, setBillingInfo] = useState(null);

  const [checkbox, setCheckbox] = useState();
  const handleCheckboxChange = (event) => {
    setCheckbox(event.target.value);
  };

  return (
    <div className='container'>
      <h1>Checkout</h1>

      <div style={{display:'flex', flex: '50%'}}>

        <div style={{display:'grid'}}>
          <div className='ticket-checkout'>
            <h2>Delivery</h2>
            <h4>Mobile Entry - Free</h4>

            <p style={{color: 'grey'}}>
              Tickets Available on Thursday 18, 2023.
              <br/>
              These mobile tickets will be transferred directly to you from a trusted seller.
            </p>

          </div>

          <div className='payment-checkout'>
            <h2>Payment</h2>
            <h4>Use Credit / Debit Card </h4>


            <div style={{display: 'grid'}}>
                <div style={{display: 'flex', alignItems: 'center', backgroundColor: '#B7E0F7'}}>
                  <input type='checkbox' style={{marginRight: "20px"}}></input>

                  <RiVisaLine size={40}/>

                  <h5 style={{marginLeft: '35px'}}>
                    Visa - 9999
                      <br/>
                      User Name | exp. 00/11
                      <br/>
                      Edit | Delete
                  </h5>

                </div>
                <hr/>
                <div style={{display: 'flex', alignItems: 'center', backgroundColor: '#B7E0F7'}}>
                  <input type='checkbox' style={{marginRight: "20px"}}></input>

                  <RiMastercardFill size={40}/>

                  <h5 style={{marginLeft: '35px'}}>
                    MasterCard - 8888
                      <br/>
                      User Name | exp. 00/22
                      <br/>
                      <p style={{color: '0CB1F9'}}>Edit | Delete</p>
                  </h5>

                </div>

                <h4>Or Pay With </h4>
                <p>
                    By Using a digital wallet and continuing past this page, you have read and are
                    <br/>
                    accepting the <a href='#'>Terms of Use</a>.
                </p>

            </div>
              
          </div>
        </div>

        <div style={{display:'grid'}} className='fee-checkout'>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <h3>Total</h3>
              <h3> $ {Number(overallTotal).toFixed(2)}</h3>
          </div>

          <h4>Tickets</h4>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <p style={{marginBottom: '0px'}}>
                Movie Ticket(s): {movieDetails.price} * {ticketCount}
              </p>
              <p style={{marginBottom: '0px'}}> 
               $ {Number(total).toFixed(2)}
              </p>
          </div>

          <h4>Notes From Seller</h4>
          <p style={{margin: '0px'}}>
              xfer XFER Proof of at least one dose of COID-19
              vaccination for ages 5 to 11 and guests ages 12 and upcoming
              will be required to how proof of two COVID-19 vaccine
              doses orone dose of the Johnson & Johnson vaccine.
              Masks must be worn.
          </p>

          <h4 style={{marginBottom: '0px'}}>Fees</h4>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <p style={{marginBottom: '0px'}}>
                Service Fee: {serviceFee} * {ticketCount}
              </p>
              <p style={{marginBottom: '0px'}}> 
                $ {Number(total1).toFixed(2)}
              </p>
          </div>

          <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <p style={{marginTop: '0px'}}>Order Processing Fee</p>
              <p style={{marginTop: '0px'}}> $ {Number(processingFee).toFixed(2)}</p>
          </div>

          <h4 style={{marginBottom: '0px'}}>Delivery</h4>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <p>Mobile Entry</p>
              <p> Free</p>
          </div>

          <h5 style={{marginBottom: '0px'}}>
            <a href='/'>Cancel Order</a>
          </h5>

          <br/>

          <h5 style={{margin: '0px'}}>* All sales are final - No Refunds</h5>

          <div style={{display: 'flex'}}>
              <input 
                type='checkbox' 
                value={'checked'}
                onChange={handleCheckboxChange}
              ></input>
              <h5> I have read and agreed to the current <a href='#'>Terms of Use</a></h5>
          </div>

          {checkbox === 'checked' ? (
            <>
              <button 
                style={{backgroundColor: '#3A9906', color: 'white', padding: '10px'}}
                onClick={() => {
                  nav('/', {state : state})
                }}
                >
                  Place Order
              </button>
            </>
            ):(
            <>
              <button 
                  style={{backgroundColor: 'grey', color: 'white', padding: '10px', borderRadius: '3px'}}
                  disabled
                  >
                    Place Order
                </button>
            </>
          )}
            
        </div>
    	
      </div>
    </div>
  );
};

export default Checkout;