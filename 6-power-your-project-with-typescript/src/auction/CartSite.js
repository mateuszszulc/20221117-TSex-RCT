import { useSelector } from 'react-redux';
import { selectCartItems } from './cartSlice';
import CartItem from './CartItem'


function CartSite(){
   const cartItems = useSelector(selectCartItems)

   return (
        <div>
            <h1>Your products in the shopping cart</h1>
            <div>
                <ul className="list-group">
                    {
                        cartItems.map((i) => <CartItem key={i.id} {...i.auction} amount={i.amount} />)
                    }
                </ul>
            </div>
        </div>
    )
}


export default CartSite
