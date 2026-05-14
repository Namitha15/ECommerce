import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <Link to={`/products/${product.id}`} className="product-card-link">
            <div className="product-card">
                <img src={product.image} className="product-image" alt={product.title} />
                <div className="e-container">
                    <span className="product-category">{product.category}</span>
                    <h4 className="product-title">{product.title}</h4>
                    <p className="product-price">₹{product.price}</p>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;