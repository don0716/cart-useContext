import { Link } from "react-router"
import CartStatus from "./CartStatus"

const Header = () => {
    return (
        <div className="bg-dark py-4 text-white">
            <div className="container">

                <div className="d-flex justify-content-between">
                    <div>
                        <h2>Shopping Cart - useContext</h2>
                    </div>
                    <div>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to={`/`} className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/cart`} className="nav-link">Cart {<CartStatus />} </Link>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Header