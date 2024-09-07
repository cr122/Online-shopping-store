import ProductDetails from '../../components/ProductDetails';

export default function ProductPage({ id }) {
  return <ProductDetails id={id} />;
}

export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  const paths = products.map(product => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: { id: params.id },
  };
}
