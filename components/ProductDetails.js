// /components/ProductDetails.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export default function ProductDetails({ id }) {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} className="img-fluid" style={{ maxHeight: '300px' }} />
      <div className="rating"><strong>Rating:</strong> {product.rating.rate}</div>
      <p className="price"><strong>Price:</strong> ${product.price}</p>
      <p className="description"><strong>Description:</strong> {product.description}</p>
      <p className="category"><strong>Category:</strong> {product.category}</p>
      <p className="id"><strong>Id:</strong> {product.id}</p>
      <p className="count"><strong>Count:</strong> {product.rating.count}</p>
      <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
