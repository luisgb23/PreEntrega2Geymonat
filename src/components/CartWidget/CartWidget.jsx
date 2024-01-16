import cart from './assets/cart.svg'
import style from './CartWidget.module.css'
const CartWidget = () => { 
    return(
        <div className={style.cart}>
            <img src={cart} alt="cart-widget" className={style.imgCart}/>
            0
        </div>
    )
 }

 export default CartWidget