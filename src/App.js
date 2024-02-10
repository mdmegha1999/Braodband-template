import "./App.css";
import { Phone, Mail } from "react-feather";
// import Main from "./component/Main";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <div className="shop-name-container">
          <h1 className="shop-name">M A LINE</h1>
          <h4 className="service-type">BROADBAND SERCICES</h4>
        </div>
        <div className="logo-container">
          <img src="/Airtel_Xstream_logo.png" alt="brand_image" />
        </div>
      </header>
      <main className="App-main">
        <div className="plans-container">
          <div className="plan-card">
          <img src="Entertainment.webp" alt="Entertainment"  style={{ width: '100%', height: '50%' }}/>
          <div className="plan-price">Rs. 999/month</div>
            <div className="plan-name">Entertainment</div>
            <ul className="plan-benefits">
              <li>Unlimited Internet</li>
              <li>Up to 200Mbps Speed</li>
              <li>Unlimited Local/STD Calls</li>
              <li>Airtel Xstream, Wynk Music, and Shaw Academy subscription</li>
            </ul>
            <button>Buy Now</button>
          </div>
          <div className="plan-card">
          <img src="Infinity.webp" alt="Infinity"  style={{ width: '100%', height: '50%' }}/>

            <div className="plan-price">Rs. 499/month</div>
            <div className="plan-name">Basic</div>
            <ul className="plan-benefits">
              <li>Unlimited Internet</li>
              <li>Up to 40Mbps speed</li>
              <li>Unlimited Local/STD Calls</li>
              <li>Airtel Xstream, Wynk Music, and Shaw Academy subscription</li>
            </ul>
            <button>Buy Now</button>

          </div>
          <div className="plan-card">
          <img src="Basic.webp" alt="Basic" />

            <div className="plan-price">Rs. 799/month</div>
            <div className="plan-name">Standard</div>
            <ul className="plan-benefits">
              <li>Unlimited Internet</li>
              <li>Up to 100Mbps speed</li>
              <li>Unlimited Local/STD Calls</li>
              <li>Airtel Xstream, Wynk Music, and Shaw Academy subscription</li>
            </ul>
            <button>Buy Now</button>

          </div>
          <div className="plan-card">
          <img src="Professional.webp" alt="Professional" />

            <div className="plan-price">Rs. 1498/month</div>
            <div className="plan-name">Professional</div>
            <ul className="plan-benefits">
              <li>Unlimited Internet</li>
              <li>Up to 300Mbps speed</li>
              <li>Unlimited Local/STD Calls</li>
              <li>Airtel Xstream, Wynk Music, and Shaw Academy subscription</li>
            </ul>
            <button>Buy Now</button>


          </div>
          <div className="plan-card">
          <img src="Standard.webp" alt="Standard" />

            <div className="plan-price">Rs. 3999/month</div>
            <div className="plan-name">Infinity</div>
            <ul className="plan-benefits">
              <li>Unlimited Internet</li>
              <li>Up to 1Gbps speed</li>
              <li>Unlimited Local/STD Call</li>
              <li>Airtel Xstream, Wynk Music, and Shaw Academy subscription</li>
            </ul>
            <button>Buy Now</button>
          </div>
          
          
          
        </div>
      </main>
      <footer className="App-footer">
        <div className="address-container">
          <div className="footer-label">Address</div>
          <a
            href="https://goo.gl/maps/9B3DsTEzBi47ra2s8"
            rel="noreferrer"
            target="_blank"
            className="footer-info"
          >
          At. Post Rondha, District-Betul, Madhya Pradesh 460001
          </a>
        </div>
        <div className="contact-container">
          <div className="footer-label">Contact</div>
          <a
            href="tel:+91999999999"
            rel="noreferrer"
            target="_blank"
            className="footer-info"
          >
            <Phone /> +91 9999 99999
          </a>
          <a
            href="https://wa.me/91999999999"
            rel="noreferrer"
            target="_blank"
            className="footer-info"
          >
            <Phone /> +91 9999 99999
          </a>
          <a
            href="mailto:email@example.com"
            rel="noreferrer"
            target="_blank"
            className="footer-info"
          >
            <Mail /> email@example.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
// Customer ko apun ka text msg karna hai attatime sab ko jana ohh msg
// contact ko apun ke offer ke bare mai msg karna
