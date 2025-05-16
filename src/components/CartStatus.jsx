import useCart from "../contexts/CartContext"

const CartStatus = () =>{
    const {cartItems} = useCart()
    return (
        <span>
            ({cartItems.length})
        </span>
    )
}
export default CartStatus