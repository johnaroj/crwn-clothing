import { createSelector} from 'reselect';

const SelectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartCount],
    cartItems =>
        cartItems.reduce((accumulatedQuantity, cartItem)=>
        accumulatedQuantity + cartItem.quantity, 0)
)