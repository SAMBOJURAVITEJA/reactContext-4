import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {CartList} = value
      let total = 0
      if (CartList.length > 0) {
        for (const item of CartList) {
          console.log(item)
          total = total + item.price * item.quantity
        }
      }
      return (
        <div className="costContainer">
          <h1>
            Order Total:<span>{total}/-</span>
          </h1>
          <button className="checkout" type="button">
            CheckOut
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
