import Logo from "../../Logo/Logo";
import HomeFooter from "../../HomeFooter/HomeFooter";
import { Link } from "react-router-dom";
import { MdCall } from "react-icons/md";

const ReturnsPolicy = () => {
  window.scrollTo(0, 0);
  return (
    <div className="terms__container">
      <div className="terms-header-box">
        <Logo width="160px" logoColor="#81007F" />

        <div className="terms-policy">
          <Link to="/terms-of-service" className="policy-link">
            Terms Of Service
          </Link>
          <Link to="/privacy-policy" className="policy-link">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="termsOfService-box">
        <h1>Returns Policy</h1>

        <p>
          This Return Policy is part of our Terms of Service and should be read alongside our main terms. By making a purchase on EntàMarket, you agree to this policy.
          <br /> <br />

          <h4>Inspection and Eligibility for Returns</h4>
          It is the customer’s responsibility to inspect all items upon receipt. We have a 5-day return policy. This means you have five (5) calendar days after receiving your item to request a return.
         <b> support@entamarket.com.</b>

          <br />
          <br />
        <h4>To be eligible for a return, the item must:</h4>
          <li>Be in the same condition as when you received it.</li>
          <li>Be unworn or unused, with original tags and packaging intact.</li>
          <li>Be accompanied by the receipt or proof of purchase</li>
        </p>
      </div>
      <div className="termsOfService-box">
        <h2>How to Request a Return</h2>
        <p>To start a return, please contact us at <b>support@entamarket.com</b>. In your email, include:
        <br/>
        <br/>

        <li>Your full name</li>
        <li>Product name</li>
        <li>Order number (found on your purchase receipt)</li>
        <li>Photographs of the product showing any defect(s), if applicable</li>
        
        <br />
          
        Once we’ve reviewed your request, we will send you return instructions, including the address where your item should be sent. Please note that all return shipping costs are the customer’s responsibility, and EntàMarket will not be held liable for any lost or undelivered packages. We recommend using a tracked delivery service.

        <br />
        <br />
        <h4>Important:</h4> 
          <li><b>Do not send items back to us without first requesting a return</b>. These items will not be accepted or processed.</li>
          <li>For any questions regarding returns, contact us at <b>support@entamarket.com</b></li>
        </p>
      
      </div>
      <div className="termsOfService-box">
        <h2>Damaged or Incorrect Items</h2>
        <p>
        If your order is defective, damaged, or incorrect upon arrival, please contact us immediately at <b>support@entamarket.com</b>. Include details and photos of the damage or issue. We’ll work swiftly to assess the situation and resolve the problem.
        </p>
      </div>
      <div className="termsOfService-box">
        <h2>Non-Returnable Items</h2>
        <p>
        Certain items cannot be returned, including:
        <br />
        <br />

        <li>Perishable goods (e.g., certain foods, flowers, plants)</li>
        <li>Custom or personalized products (e.g., special orders, engravings)</li>
        <li>Personal care items (e.g., beauty products)</li>
        <li>Hazardous materials (e.g., flammable liquids, gases)</li>

        <br />
    

        If you’re uncertain about whether your item qualifies for return, please contact us before making a purchase.
        </p>
      </div>
      <div className="termsOfService-box">
        <h2>Exchanges</h2>
        <p>
        The fastest way to ensure you receive what you want is to return the item you have and make a separate purchase for the new item, once your return is accepted.
        </p>
      </div>
      <div className="termsOfService-box">
        <h2>Refunds</h2>
        <p>
          Once we’ve received and inspected your returned item, we will notify you whether the refund has been approved. If approved, you’ll be automatically refunded via your original payment method within <b>10 business days</b>. <br /> <ber/>

         <b>Please note</b>: It may take additional time for your bank to process the refund once it’s been issued.
         
         <br /> <br />
          <li>	If more than 15 business days have passed since we approved your return and you have not received your refund, contact us at <b>support@entamarket.com</b>.</li>
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

export default ReturnsPolicy;
