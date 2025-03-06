import Logo from "../../Logo/Logo";
import { Link } from "react-router-dom";
import { MdCall } from "react-icons/md";
import HomeFooter from "../../HomeFooter/HomeFooter";

const PrivacyPolicy = () => {
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
            Returns Policy
          </Link>
        </div>
      </div>
      <div className="termsOfService-box">
        <h2>Privacy Policy</h2>
        <p>
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or make a purchase from {" "}
          <Link to="/" className="page-link">
           https://entamarket.com
          </Link>
         
        </p>
      </div>
      <div className="termsOfService-box">
        <h2>PERSONAL INFORMATION WE COLLECT</h2>
        <p>
         When you visit the Site, we automatically collect certain information about your device, including your web browser, IP address, time zone, and some cookies installed on your device. As you browse the Site, we also collect information about individual web pages or products you view, what websites or search terms referred you, and how you interact with the Site. This automatically-collected data is referred to as "Device Information."
          <br /> <br />
          We collect Device Information using the following technologies:
          <br />
          <li>
            <b>Cookies: </b>
            These are data files placed on your device or computer, often including an anonymous unique identifier.
          </li>
          <li><b>Log Files:</b> These track actions on the Site, collecting data such as your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
          <li>
           <b>Web Beacons, Tags, and Pixels:</b> These are electronic files used to track how you browse the Site.
          </li>
          <br /> 

          Additionally, when you make or attempt to make a purchase through the Site, we collect certain personal information, including your name, billing address, shipping address, payment information (e.g., credit card numbers, bank transfer details), email address, and phone number. This is referred to as "Order Information."

          <br/>

          <br/>

          When we refer to "Personal Information" in this Privacy Policy, we mean both Device Information and Order Information.
        </p>
      </div>
      <div className="termsOfService-box">
        <h2>HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>
        <p>
         We use the Order Information we collect to:
          <br /> <br />
          <li>Process your payment details and fulfill orders (including arranging for shipping, and providing invoices and/or order confirmations).</li>
          <li>Communicate with you regarding your orders</li>
          <li>Screen for potential risk or fraud</li>
          <li>Provide information or marketing about our products and services in line with your preferences.</li>
          <br />

          We use Device Information to:
          <br />
          <li>Screen for potential risks and fraud (particularly your IP address)</li>
          <li>Improve and optimize the Site (e.g., through analytics on how customers browse and interact with the Site, and to assess the success of marketing campaigns).</li>
          <br />
          Finally, we may also share your Personal Information to comply with
          applicable laws and regulations, to respond to a subpoena, search
          warrant or other lawful request for information we receive, or to
          otherwise protect our rights.
        </p>
      </div>
      <div className="termsOfService-box">
        <h2> SHARING YOUR PERSONAL INFORMATION</h2>
        <p>
          We share your Personal Information with third parties to help us use
          your Personal Information, as described above. We use:
          <br /> <br />
          <li> AWS Cloud Hosting for hosting our web application</li>
          <li> Sendgrid for email communications</li>
          <br />
  
         In addition, we may share your Personal Information to comply with applicable laws and regulations, respond to lawful requests (such as subpoenas or search warrants), or protect our rights.
        </p>
      </div>
      <div className="termsOfService-box">
        <h2>BEHAVIOURAL ADVERTISING</h2>
        <p>
          As described above, we use your Personal Information to provide you
          with targeted advertisements or marketing communications we believe
          may be of interest to you

          <br />
          <br />

          You can opt-out of targeted advertising by following opt-out instructions provided by services we use. (Please include specific opt-out links for platforms like Google, Facebook, etc.)
         
        </p>
      </div>

      <div className="termsOfService-box">
        <h2>DO NOT TRACK</h2>
        <p>
          Please note that we do not alter our Site's data collection and usage practices when we receive a "Do Not Track" signal from your browser.
        </p>
      </div>

        <div className="termsOfService-box">
        <h2>DATA RETENTION</h2>
        <p>
          When you place an order through the Site, we will maintain your Order
          Information for our records unless and until you ask us to delete this
          information.
        </p>
      </div>

      <div className="termsOfService-box">
        <h2>MINORS</h2>
        <p>The Site is not intended for individuals under the age of 18. If we learn that we have inadvertently collected personal data from someone under this age, we will take steps to delete that information.</p>
      </div>

      <div className="termsOfService-box">
        <h2>CHANGES TO THIS PRIVACY POLICY</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. When we make changes, the updated policy will be posted on this page, with an updated "Last Updated" date
        </p>


     
      </div>

      <div className="termsOfService-box">
        <h2>CONTACT US</h2>
        <p>
          For more information about our privacy practices, if you have
          questions, or if you would like to make a complaint, please contact us
          by e-mail at <b>support@entamarket.com</b> or by mail using the
          details provided below:
          <br />
          <br />

          
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

export default PrivacyPolicy;
