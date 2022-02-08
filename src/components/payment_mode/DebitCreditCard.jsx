import React from 'react';

const DebitCreditCard = ({setFormValues, formValues}) => {
  return <div>
      <div className="name-on-card">
        <label htmlFor="nameOnCard">Name on Card:</label>
        <input type="text" id='nameOnCard' name="nameOnCard" required 
        onChange={(e)=>setFormValues({...formValues,nameOnCard:e.target.value})}
        />
      </div>

      <div className='card-number'>
        <label htmlFor="cardNum" >Card Number:</label>
          <div>
              <input type="text" id='cardNum' name='cardNum' 
                onChange={(e)=>setFormValues({...formValues,cardNum:e.target.value})}
              />
              <div className='card-secret'>
                  <label htmlFor="expiry-date">Expiration Date:</label>
                  <input type="text" id='expiry-date' name='expDate' 
                    onChange={(e)=>setFormValues({...formValues,expDate:e.target.value})}
                  />

                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id='cvv' name='cvv'
                    onChange={(e)=>setFormValues({...formValues,cvv:e.target.value})}
                  />
              </div>
          </div>
      </div>
  </div>;
};

export default DebitCreditCard;
