import "./Modal.css";
import ReactDOM from "react-dom";

function Modal({children, handleClose, isSalesModal}) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className="modal"  style={{
          border: "4px solid",
          borderColor: isSalesModal ? "red" : "#555",
          textAlign: "center"}}>
            {children}
            <button 
              onClick={handleClose} 
              className={isSalesModal ? "sales-btn" : ""}
            >close</button>
        </div>
    </div>
  ), document.body)
}

export default Modal