import React from 'react';
import { rateFormatter } from '../api/RateFormatter';
import { useGlobal } from '../context/Context';

export const CartItem = ({item}) => {
    
  const {onAdd, onRemove, removeBtn} = useGlobal()

    

    
  return <div className='cart-item' key={item.id}>
    <div className='cart-image'>
      <img src={item.img} alt="" />
    </div>
    <div className='cart-description'>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
    <div className='cart-price'>
    <p> <span>₹</span>{rateFormatter(item.price) } </p>
    </div>
    <div className='cart-quantity'>
      <button onClick={()=>onRemove(item)}>-</button>
      <span>{item.qty}</span>
      <button onClick={()=>onAdd(item)}>+</button>
    </div>
    <div className='cart-remove'>
      <button onClick={()=>removeBtn(item)}>Remove</button>
    </div>
    <div className='cart-total1'>
    <p> <span>₹</span>{rateFormatter(item.price*item.qty) } </p>
    </div>
</div>
};
