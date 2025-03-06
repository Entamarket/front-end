import Logo from "../../Logo/Logo";
import HomeFooter from "../../HomeFooter/HomeFooter";
import { Link } from "react-router-dom";
import { MdCall } from "react-icons/md";

const Shippings = () => {
  window.scrollTo(0, 0);
  return (
    <div className="terms__container">
      <div className="terms-header-box">
        <Logo width="160px" logoColor="#81007F" />

        <div className="terms-policy">
          <Link to="/terms-of-service" className="policy-link">
            Terms Of Service
          </Link>
          <Link to="/returns-policy" className="policy-link">
           Return Policy
          </Link>
        </div>
      </div>
      <div className="termsOfService-box">
        <h1>Shipping & Delivery Policy</h1>

        <p>
            This Shipping and Delivery Policy is part of our Terms of Service and should be read alongside our main terms. At EntàMarket, we aim to ensure a seamless and efficient delivery process for all orders placed through our platform. Please review this policy to understand how shipping and delivery are handled.
          <br /> <br />

          <h4>Shipping and Delivery Options</h4>
        EntàMarket offers reliable delivery services, all managed by our in-house Logistics Team. Sellers are required to have their orders packed and ready for pick-up by our logistics personnel. Alternatively, sellers may drop off their orders at our designated office for delivery to the customer.

          <br />
          <br />
        <h4>Shipping Fees</h4>
          <li><b>Within Lagos</b>: Delivery fees are calculated based on the total weight of the items ordered.</li>
          <li><b>Outside Lagos</b>: Delivery costs outside Lagos are evaluated on a case-by-case basis by our Admin team, taking into account the size, weight, and destination of the order.</li>
        </p>
      </div>
      <div className="termsOfService-box">
        <h2>International Delivery</h2>
        <p>
            At this time, EntàMarket does not offer international shipping. We currently serve only local destinations within Nigeria.
        <br/>
        <br/>
        </p>
      
      </div>
      <div className="termsOfService-box">
        <h2>Order Tracking and Delivery Confirmation</h2>
        <p>
        After placing an order, buyers can track its status directly within the Entamarket app.

        <br />
        <br />

       <b> Upon receiving your order:</b>
        <br/>
        <li>Buyers must confirm receipt of the order by signing electronically within the EntàMarket app. This "Confirm Delivery" function serves as your electronic signature and proof that you received your order.</li>
        <li>In cases where the buyer is unable to confirm delivery (due to reasonable circumstances), the logistics team member will confirm delivery on your behalf in your presence, and an email will be sent for your final verification.</li>

        <br />
       <b>Important:</b> Never click "Confirm Delivery" within your account until you have physically received your order.
        </p>
      </div>
      <div className="termsOfService-box">
        <h2>Delivery Timeframes</h2>
        <p>
        Standard delivery times are as follows:
        <br />
        <br />

        <li><b>Within Lagos</b>: 2-4 business days.</li>
        <li><b>Outside Lagos</b>: Delivery times may vary based on location and will be communicated upon order confirmation.</li>

        <br />
    
      We strive to meet the estimated delivery times; however, delays may occur due to unforeseen circumstances (e.g., weather, traffic, or logistics issues). If your order is delayed, please contact our support team immediately at <b>support@entamarket.com</b> or call <b>+234 906 359 7740</b>, and we will work to resolve any issues as quickly as possible.
        </p>
      </div>
      <div className="termsOfService-box">
        <h2>Order Issues and Delays</h2>
        <p>
            If your order is delayed beyond the typical timeframe, please contact us as soon as possible. While we aim to avoid delays, there may be external factors beyond our control. We will provide you with updates and work with our logistics team to ensure your order is delivered promptly.
        </p>
      </div>
      <div className="termsOfService-box">
        <h2>Unsuccessful Deliveries</h2>
        <p>
            In the event that we are unable to complete the delivery after multiple attempts, the order will be returned to the seller or to our office. The buyer will be responsible for any additional shipping costs related to resending the order.
        </p>
      </div>
      <div className="termsOfService-box">
        <h2>Returns and Refunds</h2>
        <p>
            For information regarding returns, refunds, and exchanges, please refer to our <Link className="page-link" to="/returns-policy">Returns policy</Link>.
          <br /> <br />

          <i>Last Updated 06/03/2025</i>

          <br />
          <br />
          <span className="span-link"> Entamarket Limited</span>
          <br />
          <span className="span-link">support@entamarket.com</span>
          <br />
          <span className="span-link">
            Shop c20 kebi 1 Plaza Tradefair BBA Lagos, Nigeria.
          </span>
          <br />
          <span className="span-link">
            {" "}
            <MdCall className="call-icon" /> +234 906 3597 740
          </span>
        </p>
      </div>

      <HomeFooter />
    </div>
  );
};

export default Shippings;
