import '/app/globals.css';
import Image from 'next/image';


export default function Services() {
  return (
    <div className="container">
      <div>
        <div className="text-center">
          <h1 className="main-heading">Our Services</h1>
          <p className="sub-heading">
            Comprehensive solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid-container">
          <div className="card">
            <div>
              {/* <img src="/serv1.png" alt="Service 1" className="card-image"/> */}

              <Image 
  src="/serv1.png" 
  alt="Web Development"
  width={500}  
  height={300} 
  quality={75} 
/>

            </div>
            <div className="card-content">
              <h2 className="card-title">Service 1</h2>
              <p className="card-description">
                Detailed description of service 1 and its benefits. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
          
          <div className="card">
            <div>
              {/* <img src="/serv2.png" alt="Service 2" className="card-image"/> */}
              <Image 
  src="/serv2.png" 
  alt="SEO"
  width={500}  
  height={300} 
  quality={75} 
/>

            </div>
            <div className="card-content">
              <h2 className="card-title">Service 2</h2>
              <p className="card-description">
                Detailed description of service 2 and its benefits. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}