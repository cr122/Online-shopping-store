// /pages/cart.js
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { removeFromCart } from '../redux/cartSlice'; // Ensure this action exists in your redux setup

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  // Function to handle removing item from cart
  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div>
      <Head>
        <title>Shopping Cart</title>
        <style>{`
          .cart-container {
            margin-top: 50px;
          }
          .list-group-item {
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 8px;
            margin-bottom: 15px;
            padding: 15px;
          }
          .list-group-item h5 {
            margin: 0;
            font-size: 1.25rem;
            color: #333;
          }
          .list-group-item p {
            margin: 0;
            font-size: 1rem;
            color: #666;
          }
          .list-group-item img {
            border-radius: 5px;
          }
          .total-amount {
            font-weight: bold;
            font-size: 1.5rem;
            color: #007bff;
          }
        `}</style>
      </Head>
      <div className="container cart-container">
        <h1 className="text-center">Shopping Cart</h1>
        <ul className="list-group">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.title}</h5>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </div>
                <img src={item.image} alt={item.title} className="img-fluid" style={{ maxHeight: '50px' }} />
                <button
                  className="btn btn-danger ms-3"
                  onClick={() => handleRemove(item.id)} // Pass the item ID to handle remove
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <h3 className="mt-4 text-end total-amount">Total: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
}
