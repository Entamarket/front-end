import "./HomeFooter.css";
import Logo from "../Logo/Logo";
import appleLogo from "../Assets/img/app2.png";
import androidLogo from "../Assets/img/play1.png";
import { Link } from "react-router-dom";

const HomeFooter = () => {
  return (
    <div className="home__footer">
      <div className="home__footer-box">
        <Logo width="150px" logoColor="#fff" />

        <div className="download__platform">
          <img
            src={androidLogo}
            alt="Apple Logo"
            width="125px"
            className="app-logo"
          />
          <img
            src={appleLogo}
            alt="Android Logo"
            width="125px"
            className="android-logo"
          />
        </div>
      </div>

      <div className="main__footer-links">
        <div className="home__footer-links">
          <h3>Help Center</h3>
          <Link to="/support">Customer Support</Link>
          <a href="/">Buy on Entamarket</a>
          <a href="/">Register as a seller</a>
        </div>

        <div className="home__footer-links about-link">
          <h3>About Entamarket</h3>
          <Link to="/aboutus">About us</Link>
          <Link to="/terms-of-service">Terms & Conditions</Link>
        </div>

        <div className="home__footer-links earn-link">
          <h3>Policy & Support</h3>
          <Link to="/support">Customer Support</Link>
          <Link to="/returns-policy">Returns Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
