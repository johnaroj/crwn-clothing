import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import CartItem from '../card-item/card-item.component';
import { selectCartItems} from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { createStructuredSelector} from 'reselect';
import { CartDropdownContainer, CartDropdownButton, EmptyMessageContainer, CartItemsContainer} from './cart-dropdown.styles';

const CartDropDown = ({cartItems, history, dispatch}) =>(
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length?
                cartItems.map(cartItem =>
                    <CartItem key={cartItem.id} item={cartItem}/>)
                :<EmptyMessageContainer>Yout cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={()=> {
           history.push('/checkout');
           dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT </CartDropdownButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect( mapStateToProps)(CartDropDown));