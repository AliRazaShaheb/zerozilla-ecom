import React,{useState, useEffect} from 'react';
import { rateFormatter } from '../api/RateFormatter';
import { useGlobal } from '../context/Context';

export const CartItem = ({img, desc,price}) => {
    const [count, setCount] = useState(1);
    const {subTotal, setSubTotal} = useGlobal()
    
    
    

    

    const qty_increment = ()=>{
        setCount((prev)=>{
            return prev+1
        })
    }
    const qty_decrement = ()=>{
        setCount((prev)=>{
            if(prev==1) return 1
            return prev-1
        })
    }

  return <div className='cart-item'>
  <div className='cart-image'>
    <img src={img} alt="" />
  </div>
  <div className='cart-description'>
    <p>{desc}</p>
  </div>
  <div className='cart-price'>
  <p> <span>₹</span>{rateFormatter(price) } </p>
  </div>
  <div className='cart-quantity'>
    <button onClick={qty_decrement}>-</button>
    <span>{count}</span>
    <button onClick={qty_increment}>+</button>
  </div>
  <div className='cart-remove'>
    <button>Remove</button>
  </div>
  <div className='cart-total1'>
  <p> <span>₹</span>{rateFormatter(price*count) } </p>
  </div>
</div>;
};
