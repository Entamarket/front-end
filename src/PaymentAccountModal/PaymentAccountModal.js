import "./PaymentAccountModal.css";
import { MdAccountBalance } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
const PaymentAccountModal = (props) => {
  return (
    <div className="modal-content">
      <div className="modal-close">
       
       <div className="modBoxFlex">
       {props.validAcct || props.validotp ?   <div className="withFlex" onClick={props.handleBackBank}>
            <FaAngleLeft className="withdr2" />
            <span>Back</span>
        </div> : <div> </div>}
       
       <div>  
        <FaTimes className="close" onClick={props.closeModal} />
       
       </div>
       </div>

      </div>

      <div className="pay_account-icon">
        <span>
          <MdAccountBalance />
        </span>
        <h4>Add Payment Account</h4>
      </div>

      {props.children}
    </div>
  );
};

export default PaymentAccountModal;
