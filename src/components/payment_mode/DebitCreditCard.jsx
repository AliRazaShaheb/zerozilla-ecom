import React from 'react';

const DebitCreditCard = () => {
  return <div>
      <div className="name-on-card">
        <label htmlFor="name-on-card">Name on Card:</label>
        <input type="text" id='name-on-card' name="name-on-card" required/>
      </div>

      <div className='card-number'>
        <label htmlFor="card-number" >Card Number:</label>
          <div>
              <input type="text" id='card-number' />
              <div className='card-secret'>
                  <label htmlFor="expiry-date">Expiration Date:</label>
                  <input type="text" id='expiry-date' />

                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id='cvv' />
              </div>
          </div>
      </div>
  </div>;
};

export default DebitCreditCard;
