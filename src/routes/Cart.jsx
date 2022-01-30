import React from 'react';
import { CartItem } from '../components/CartItem';
import { rateFormatter } from '../api/RateFormatter';

let cocacola = "data:image/jpeg;base64,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"

const Cart = () => {
  return (
    <>
      <h1>Cart</h1>
      <div className='cart'>
        <div className='cart-header'>
          <div className='cart-image'>
            <p>image</p>
          </div>
          <div className='cart-description'>
            <p>description</p>
          </div>
          <div className='cart-price'>
            <p>price</p>
          </div>
          <div className='cart-quantity'>
            <p>Quantity</p>
          </div>
          <div className='cart-remove'>
            <p>remove</p>
          </div>
          <div className='cart-total1'>
            <p>total</p>
          </div>
        </div>

        <div className="item-added">
          <CartItem img={cocacola} 
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, quaerat."
            price="50"
          />
          <CartItem img="https://www.bigbasket.com/media/uploads/p/xxl/40104245_5-pepsi-black-soft-drink-max-taste-zero-caldiet.jpg" 
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, quaerat."
            price="60"
          />
          
        </div>

      </div>

      <div className="cart-total">
        <div className="left">
          <p>Subtotal</p>
          <p>GST@18%</p>
          <p>Shipping Charge</p>
          <p>Grand Total</p>
        </div>
        <div className="right">
          <p> <span>₹</span>{rateFormatter(100) } </p>
          <p> <span>₹</span>{rateFormatter(18) } </p>
          <p> <span>₹</span>{rateFormatter(20) } </p>
          <p> <span>₹</span>{rateFormatter(138) } </p>
        </div>
      </div>
      <div className="checkout">
        <button>Checkout</button>
      </div>
    </>
  );
};

export default Cart;
