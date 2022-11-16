import "./header.scss"
import { useState } from "react";
import logo from "../../../images/logo.svg"
import { Link } from "react-router-dom";
import Modal from "../../modal/modal";


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <>
        <header>
            <div className="header-inner">

                <div className="header-logo">
                    <Link to="/">

                    <img src={logo} alt="meatabnb-logo" />

                    </Link>

                </div>

                <div className={isNavExpanded ? "navexpanded" : "header-nav"}>
                    <nav className="nav">
                        <ul>
                            <li>
                                <Link to="/" >
                            Home
                            </Link>
                            </li>

                            <li>
                                <Link to="/PlaceToStay" className="link">
                            Place to stay
                            </Link>
                            </li>

                            <li>
                            NFTs
                            </li>

                            <li>
                            Community
                            </li>
                        </ul>

                        <div className="header-connect-btn">

                            <button onClick={() => setIsOpen(true)}>
                                Connect Wallet
                            </button>

                            </div>


                    </nav>

                </div>

               

                
                    <button className="responsive-menu-icon" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                   
            </div>
        </header>

        {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>
    )
}

export default Header