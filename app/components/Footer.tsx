import Link from 'next/link';
import '/app/globals.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-heading">About Us</h3>
            <p className="footer-text">
              Brief description of your company and mission.
            </p>
          </div>
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/services" className="footer-link">Services</Link></li>
              <li><Link href="/about" className="footer-link">About</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-heading">Contact Info</h3>
            <ul className="footer-contact">
              <li>Email: uzmarahd@gmail.com</li>
              <li>Phone: 123456789</li>
              <li>Address: 123 Johar<br/>Karachi, Pakistan</li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}