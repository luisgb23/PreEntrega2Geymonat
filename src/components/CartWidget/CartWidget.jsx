import cart from './assets/cart.svg'
import style from './CartWidget.module.css'
import { useCart } from '../../context/CartContext'
const CartWidget = () => { 
    const { totalQuantity } = useCart()
    return(
        <div className={style.cart}>
            <img src={cart} alt="cart-widget" className={style.imgCart}/>
            {totalQuantity}
        </div>
    )
 }

 export default CartWidget