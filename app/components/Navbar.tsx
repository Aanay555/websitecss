import Link from 'next/link';
import '/app/globals.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          Logo
        </Link>
        <div className="navbar-links">
        <Link href="/services" className="navbar-link">
  Services
</Link>
<Link href="/about" className="navbar-link">
  About
</Link>
<Link href="/contact" className="navbar-link">
  Contact
</Link>
        </div>
      </div>
    </nav>
  );
}