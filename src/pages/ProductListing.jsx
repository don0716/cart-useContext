
import { useEffect, useState } from "react"
import useCart from "../contexts/CartContext"


const ProductListing = () => {
    const {products, setProducts, handleAddToCart} = useCart()
    const [newProduct, setNewProduct] = useState({
        id: "",
        name: "",
        price: "",
        imgLink: ""
    })

    const inputHandler = (e) => {
        const {value, name} = e.target
        setNewProduct(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const updateNewProd = {...newProduct, imgLink: `https://placehold.co/600x400?text=${newProduct.name}`, id: products.length + 1 }
        setProducts(prod => [...prod, updateNewProd])
    }

    return (
        <div className="container">
            <h2 className="text-center"> ProductListing</h2>

            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <h4>Product List</h4>
                        {
                        products.map((prod) => (
                            <div key={prod.id} className="col-md-5 my-2 mx-2">
                                    <div className="card">
                                        <img className="card-img-top img-fluid" src={`${prod.imgLink}`} alt={`${prod.name}`} />
                                    <div className="card-body">
                                        <h5>{prod.name}</h5>
                                        <h5>{prod.price}</h5>
                                        
                                    </div>
                                    <button onClick={() => handleAddToCart(prod)} className="btn btn-primary btn-sm m-2">Add To Cart</button>
                                    </div>
                              </div>
                        ))
                    }
                    </div>
                </div>

                <div className="col-md-6">
                    <h4>Add Product</h4>
                    <form onSubmit={submitHandler} >
                        <input required value={newProduct.name} name="name" onChange={inputHandler} type="text" className="form-control my-2" placeholder="name" />

                        <input required value={newProduct.price} name="price" onChange={inputHandler} type="text" className="form-control my-2" placeholder="price" />
                        
                        <button onClick={inputHandler} type="submit" className="btn btn-primary">Add Product</button>
                    </form>
                </div>
                
            </div>


        </div>
    )
}
export default ProductListing