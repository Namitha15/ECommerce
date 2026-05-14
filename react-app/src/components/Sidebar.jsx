import React from "react";

import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <div className="sidebar">
            <h3>Categories</h3>

            <div className="sidebar-section">
                <nav >
                    <Link to="/">All Products</Link>
                    <br></br>
                    <Link to="/category/clothing">Clothing</Link>
                    <br></br>
                    <Link to="/category/jewellery">Jewellery</Link>
                    <br></br>
                    <Link to="/category/electronics">Electronics</Link>
                </nav>
            </div>
        </div>

    );
}
export default Sidebar;



