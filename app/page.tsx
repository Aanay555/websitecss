import Link from "next/link";
import '/app/globals.css';
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <section>
        <div className="text-center">
          <h1 className="main-heading">
            Unleashing the Power of Digital for You
          </h1>
          <p className="sub-heading">
            Discover our comprehensive solutions and professional services
          </p>
        </div>
        
        <div className="grid-container">
          <Link href="/services" className="card">
            <div>
              {/* <img src="/services.png" alt="Services" className="card-image"/> */}

              <Image 
  src="/services.png" 
  alt="Web Development"
  width={500}  
  height={300} 
  quality={75} 
/>

            </div>
            <div className="card-content">
              <h3 className="card-title">Our Services</h3>
              <p className="card-description">Explore our range of professional services</p>
            </div>
          </Link>
          
          <Link href="/about" className="card">
            <div>
              {/* <img src="/aboutus.png" alt="About Us" className="card-image"/> */}

              <Image 
  src="/aboutus.png" 
  alt="About Us"
  width={500}  
  height={300} 
  quality={75} 
/>
            </div>
            <div className="card-content">
              <h3 className="card-title">About Us</h3>
              <p className="card-description">Learn more about our company and values</p>
            </div>
          </Link>
          
          <Link href="/contact" className="card">
            <div>
              {/* <img src="/contact.png" alt="Contact" className="card-image"/> */}

              <Image 
  src="/contact.png" 
  alt="contact us"
  width={500}  
  height={300} 
  quality={75} 
/>

            </div>
            <div className="card-content">
              <h3 className="card-title">Contact Us</h3>
              <p className="card-description">Get in touch with our team</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}