
import { useParams } from "react-router-dom";
import React from "react";

function ProductDetail({ products, addToCart, removeCart }) {
    const { id } = useParams();
    /* contains everything about this item */
    const product = products.find(p => p.id == id);
    if (!product) return <h2>Product not found</h2>;
    return (
        <div className="detail">
            <img src={product.image} alt={product.title} />
            <div className="detail-content">
                <div className="product-category">{product.category}</div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3 className="price">Rs. {product.price}</h3>
                <button onClick={() => addToCart(product)}> Add to cart</button>
                <br></br>
                <button onClick={() => removeCart(id)}>remove from cart</button>
            </div >
        </div >
    );
}
export default ProductDetail;
