import React,{useState} from 'react';
import { rateFormatter } from '../api/RateFormatter';
import { CartItem } from '../components/CartItem';
import { useGlobal } from '../context/Context';



const Cart = () => {
  
  const {subTotal, cartItem} = useGlobal()
  
  
  // const qty_increment = ()=>{
  //   setCount((prev)=>{
  //       return prev+1
  //   })
  // }
  // const qty_decrement = ()=>{
  //     setCount((prev)=>{
  //         if(prev==1) return 1
  //         return prev-1
  //     })
  // }
  const itemPrice = cartItem.reduce((a,c)=>(a+c.price*c.qty),0)
  

  const gst = itemPrice * 0.18
  const shipping = itemPrice * 0.06
  const total = itemPrice + gst + shipping


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
          
         {cartItem.length===0 && <p style={{fontWeight:"bold", color:"red"}}>Cart is empty</p>}          
          {cartItem.map((item)=>(
            <CartItem key={item.id} item={item} />
          ))}
          
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
          <p> <span>₹</span>{rateFormatter(itemPrice) } </p>
          <p> <span>₹</span>{rateFormatter(gst) } </p>
          <p> <span>₹</span>{rateFormatter(shipping) } </p>
          <p> <span>₹</span>{rateFormatter(total) } </p>
        </div>
      </div>
      <div className="checkout">
        <button className={cartItem.length===0 ? "btn-disable":"" }>Checkout</button>
      </div>
    </>
  );
};

export default Cart;
