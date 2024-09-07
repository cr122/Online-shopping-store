import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function Home() {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <Head>
        <title>Trimble Store</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 shadow-sm w-100 px-4" >
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-white " href="#">
            Trimble Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" legacyBehavior>
                  <a className="nav-link fw-bold text-white">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/cart" legacyBehavior>
                  <a className="nav-link fw-bold text-white">
                    Shopping Cart ({cart.length})
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/login" legacyBehavior>
                  <a className="nav-link fw-bold text-white">Login</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/register" legacyBehavior>
                  <a className="nav-link fw-bold text-white">Register</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="text-center py-5 " style={{ marginTop: '5rem', marginBottom: '5rem', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <h1 className="display-3 fw-bold">Welcome to Trimble Store</h1>
        <p className="lead text-muted">
          Discover everything your heart desires. If you can think it, we sell it.
        </p>
        <Link href="/cart" legacyBehavior>
          <a className="btn btn-outline-dark mt-4">View Cart ({cart.length})</a>
        </Link>
      </header>



{/* Main Content */}
<main className="container mt-5 ">
  <h2 className="text-center mb-5 fw-bold">Our Favourites</h2>
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {products.map((product) => (
      <div className="col" key={product.id}>
        <div className="card h-100 bg-white border-1 shadow-sm">
          <img
            src={product.image}
            className="card-img-top p-3"
            alt={product.title}
            style={{ maxHeight: '200px', objectFit: 'contain' }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-truncate">{product.title}</h5>
            <p className="card-text">
              <strong>Rating:</strong> {product.rating.rate}
            </p>
            <p className="card-text">
              <strong>Price:</strong> ${product.price}
            </p>
            <p className="card-text text-truncate">
              <strong>Description:</strong> {product.description}
            </p>
            <button
              className="btn btn-primary mt-auto"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</main>
    </div>
  );
}
