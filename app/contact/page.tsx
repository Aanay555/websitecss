import '/app/globals.css';

export default function Contact() {
  return (
    <div className="container">
      <div>
        <div className="text-center">
          <h1 className="main-heading">Contact Us</h1>
          <p className="sub-heading">
            Get in touch with our team today
          </p>
        </div>
        
        <div className="grid-container">
          <div className="form-container">
            <h2 className="card-title">Send Us a Message</h2>
            <form>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea 
                  className="form-input"
                  rows={4}
                />
              </div>
              <button className="form-button">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="form-container">
            <h2 className="card-title">Contact Information</h2>
            <div>
              <div>
                <h3 className="card-title">Email</h3>
                <p className="card-description">uzmarahd@gmail.com</p>
              </div>
              <div>
                <h3 className="card-title">Phone</h3>
                <p className="card-description">0123456789</p>
              </div>
              <div>
                <h3 className="card-title">Address</h3>
                <p className="card-description">
                  123 Johar<br/>Karachi, Pakistan
                </p>
              </div>
              <div>
                <h3 className="card-title">Business Hours</h3>
                <p className="card-description">
                  Friday to Thursday: 10:00 AM - 6:00 PM<br/>
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}