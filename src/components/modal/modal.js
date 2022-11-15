
import "./modal.scss"
import meta_mask from "../../images/icons/metaMask.svg"
import walletconnect from "../../images/icons/walletconnect.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Modal = ({ setIsOpen }) => {
    
  return (
    <>
    <div className="modal-main" >
        <div className="modal-inner">

            <div className="modal-body">

                <div className="modal-header">
                    <span>Connect Wallet</span>
                    <FontAwesomeIcon icon="fa-xmark"  onClick={() => setIsOpen(false)} className="close-btn"/>
                </div>

                <div className="modal-content">
                    <h5>Choose your preferred wallet:</h5>

                    <button>
                        <img src={meta_mask} alt="metamask" />
                        <FontAwesomeIcon icon="fa-chevron-right" />
                    </button>

                    <button>
                    <img src={walletconnect} alt="walletconnect" />
                    <FontAwesomeIcon icon="fa-chevron-right" />
                    </button>

                </div>

            </div>

        </div>
  
  </div> 

 
  </>
  )
};

export default Modal;