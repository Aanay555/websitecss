import '/app/globals.css';
import Image from 'next/image';

export default function About() {
  return (
    <div className="container">
      <div>
        <div className="text-center">
          <h1 className="main-heading">About Us</h1>
          <p className="sub-heading">
            Learn about our journey and vision
          </p>
        </div>
        
        <div className="grid-container">
          <div className="card">
            <div className="relative w-full h-[300px]">
              <Image 
                src="/about.png" 
                alt="About Us"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
          <div>
            <div>
              <h2 className="card-title">Our Story</h2>
              <p className="card-description">
                Detailed description about our company&apos;s history, mission, and values.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <h2 className="card-title">Our Vision</h2>
              <p className="card-description">
                Information about our company&apos;s future goals and aspirations. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}