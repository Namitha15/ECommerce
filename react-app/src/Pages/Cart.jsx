function Cart({ cart }) {
    return (
        <div className="cart-container">
            <h1>Your Cart</h1>

            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <h4>{item.title}</h4>
                        <p>₹{item.price}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;