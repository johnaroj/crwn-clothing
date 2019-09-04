import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action';
import './checkout-item.styles.scss';

const CheckoutItem =({ cartItem , clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return(<div className='checkout-item'> 
        <div className='image-container'>
            <img alt='item' src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'><span role="img" className="minus" onClick={()=> removeItem(cartItem)} aria-label="minus">&#10134;</span><span>{quantity}</span><span role="img" className='plus' onClick={() => addItem(cartItem)} aria-label="plus">&#10133;</span></span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>clearItem(cartItem)}> &#10005;</div>
    </div>
    )};


const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)