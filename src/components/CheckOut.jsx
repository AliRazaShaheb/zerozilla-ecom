import React, { useState } from 'react';
import netBanking from '../assets/12-Reach-NetBanking.png'
import creditCard from '../assets/Millennia-Card-Stack.webp'
import debitCard from '../assets/Debit card.webp'
import upiPayment from '../assets/upi.jpg'
import Input from './Input';
import { billingInputFeilds } from '../api/GeneralInfo';
import DebitCreditCard from './payment_mode/DebitCreditCard';
import NetBanking from './payment_mode/NetBanking';
import Upi from './payment_mode/Upi';
import Modal from 'react-modal/lib/components/Modal';
import { useNavigate } from 'react-router-dom';
import { useGlobal } from '../context/Context';



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor:"#954b28",
      width:"30rem",
      height:"10rem",
      position:"relative",
      color:"white",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      font:"1rem",
      fontWeight:500,
      border:"1px solid white"
    },
    overlay: {
      backgroundColor:"rgba(0,0,0,0.4)",
    },
    closeBtn:{
        position:"absolute",
        top:"1rem",
        right:"1rem",
        backgroundColor:"transparent",
        padding:"0.5rem",
        border:"none",
        color:"white"

    }
};

const CheckOut = () => {  
const [formValues, setFormValues] = useState({
    name:'',
    email:'',
    mobile:'',
    shippingAddress:'',
    nameOnCard:'',
    cardNum:'',
    expDate:'',
    cvv:'',
    chooseYourBank:'',
    upinum:'',
    remarks:''
})
const navigate = useNavigate()
const {setCartItem} = useGlobal()
const [divActive, setDivActive] = useState(1);
const [modalIsOpen, setModalIsOpen] = useState(false)

console.log(formValues)


const openModal = ()=> {
    setModalIsOpen(true);
    setTimeout(()=>{
        setModalIsOpen(false);
        navigate("/");
        window.location.reload()
        setCartItem([])
    },3000)
  }
   

const closeModal = ()=> {
    setModalIsOpen(false);
  }

const activeDiv = (id)=>{
    setDivActive(id)
}


  return <form>
    <div className='checkout'>
        <div className="title">
            <h3>Billing Details</h3>
        </div>
        <div className="billing-details">
            {billingInputFeilds.map((inputF)=>(
                <Input className="name" key={inputF.id} {...inputF} 
                setFormValues = {setFormValues} formValues={formValues} 
                />
            ))}
            
            <div className="address">
                <label htmlFor="address">Shipping Address:</label>
                <textarea id="address" name="shippingAddress" rows={5} cols={50} maxLength={100} required onChange={(e)=>setFormValues({...formValues, shippingAddress:e.target.value})}/>
            </div>

        </div>

        <div className="title">
            <h3>Payment Details</h3>
        </div>

        <div className='payment-mode'>
            <p>Payment Mode</p>
            <div className='payment-method'>
                <div className={divActive ===1 ? 'image-container active':'image-container'}  onClick={()=>activeDiv(1)}>
                    <input type="checkbox" id='radio-tb' checked={divActive ===1 ? true : false}  />
                    <div className='img-div'>
                        <img src={debitCard} alt="Debit Card" />
                    </div>
                    <p>Debit Card</p>
                </div>

                <div className={divActive ===2 ? 'image-container active':'image-container'}  onClick={()=>activeDiv(2)}>
                    <input type="checkbox" id='radio-tb' checked={divActive ===2 ? true : false}  />
                    <div className='img-div'>
                        <img src={creditCard} alt="Credit Card" />
                    </div>
                    <p>Credit Card</p>
                </div>

                <div className={divActive ===3 ? 'image-container active':'image-container'}  onClick={()=>activeDiv(3)}>
                    <input type="checkbox" id='radio-tb' checked={divActive ===3 ? true : false}  />
                    <div className='img-div'>
                        <img src={netBanking} alt="Net Banking" />
                    </div>
                    <p>Net Banking</p>
                </div>

                <div className={divActive ===4 ? 'image-container active':'image-container'}  onClick={()=>activeDiv(4)}>
                    <input type="checkbox" id='radio-tb' checked={divActive ===4 ? true : false}  />
                    <div className='img-div'>
                        <img src={upiPayment} alt="UPI Payment" />
                    </div>
                    <p>UPI Payment</p>
                </div>
            </div>
        </div>
        <div className="payment-details" >
            {divActive === 1 | divActive === 2 
                            ? <DebitCreditCard 
                                setFormValues = {setFormValues} formValues=
                                {formValues} 
                                />
                            
                            :null}
            {divActive===3 
                            ? <NetBanking 
                                setFormValues = {setFormValues} formValues=
                                {formValues} 
                                /> 
                            : null}
            {divActive === 4 
                            ? <Upi 
                                setFormValues = {setFormValues} formValues=
                                {formValues}
                                /> 
                            : null}
        </div>
        <div className="checkout-btn">
            <button type='submit' onClick={openModal}> Make Payment</button>
        </div>
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
        <button onClick={closeModal} style={customStyles.closeBtn}>X</button>
        <h1>Thank you for Shopping</h1>
      </Modal>
        
    </div>
    </form>
};

export default CheckOut;



