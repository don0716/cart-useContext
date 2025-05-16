import useCart from "../contexts/CartContext"

const Cart = () => {
    const {cartItems,handleRemoveFromCart} = useCart()
    console.log("cart::" , cartItems)

    return (
        <div className="container">
            <h2>Cart</h2>

            <p>
                {cartItems.length === 0 && "Cart is empty. Add Items to Cart."}
            </p>

            <div className="row">
                {
                    cartItems.map((prod) => (
                        <div key={prod.product.id} className="col-md-3">
                            <div className="card">
                                        <img className="card-img-top img-fluid" src={`${prod.product.imgLink}`} alt={`${prod.product.name}`} />
                                    <div className="card-body">
                                        <h5>{prod.product.name}</h5>
                                        <h5>{prod.product.price}</h5>
                                        <p>Quantity: {prod.quantity}</p>
                                    </div>
                                    <button onClick={() => handleRemoveFromCart(prod.product.id)} className="btn btn-primary btn-sm m-2">Remove from Cart</button>
                                    </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
export default Cart
