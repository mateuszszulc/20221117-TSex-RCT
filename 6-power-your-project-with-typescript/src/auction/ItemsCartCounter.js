import { useSelector } from 'react-redux';
import { selectCartItemsAmount } from './cartSlice';

function ItemsCartCounter() {

    const cartLen = useSelector(selectCartItemsAmount)

    return (
        <div>
            You already have {cartLen} items in your cart
        </div>
    )
}

export default ItemsCartCounter
