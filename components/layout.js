import Link from 'next/link';

export default function Layout(props) {
  return (
    <>
      <h1>Pages / Routing in Next.js</h1>
      <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/dashboard">Dashboard</Link> | <Link href="/dashboard/preferences">Dashboard Preferences</Link>
      <hr />
      <br />
      {props.children}
      <br />
    </>
  );
}