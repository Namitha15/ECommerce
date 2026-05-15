import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
function ProductList({ products, searchTerm }) {
    const { categoryName } = useParams();
    let filteredProducts = products;
    // Filter by category
    if (categoryName === "clothing") {
        filteredProducts = products.filter(p => p.category === "men's clothing" || p.category === "women's clothing");
    } else if (categoryName === "jewellery") {
        filteredProducts = products.filter(p => p.category === "jewelery");
    } else if (categoryName === "electronics") {
        filteredProducts = products.filter(p => p.category === "electronics");
    }
    // Filter by search term
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p =>
            p.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    return (
        <div className="container">
            <h1 className="category-title">
                {categoryName ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1) : "All Products"}
            </h1>
            <div className="product-list">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
export default ProductList;