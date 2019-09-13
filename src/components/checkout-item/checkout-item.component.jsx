import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action';
import { ChechoutItemContainer, ImageContainer, TextContainer, RemoveButtonContainer } from './checkout-item.styles';

const CheckoutItem =({ cartItem , clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return(
    <ChechoutItemContainer> 
        <ImageContainer>
            <img alt='item' src={imageUrl}/>
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <TextContainer>
            <span role="img" className="minus" onClick={()=> removeItem(cartItem)} aria-label="minus">&#10134;</span>
                <span>{quantity}</span>
            <span role="img" className='plus' onClick={() => addItem(cartItem)} aria-label="plus">&#10133;</span></TextContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer onClick={()=>clearItem(cartItem)}> &#10005;</RemoveButtonContainer>
    </ChechoutItemContainer>
    )};


const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)