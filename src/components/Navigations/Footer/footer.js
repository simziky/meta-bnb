import "./footer.scss"
import f_logo from "../../../images/footerLogo.svg"
import facebook from "../../../images/icons/facebook.svg"
import insta from "../../../images/icons/instagram.svg"
import twitter from "../../../images/icons/twitter.svg"
const Footer = () => {
    return (
        <>
        <footer>
            <div className="footer-inner">
            <div className="footer-sec-1">
                <div className="footer-logo">
                    <img src={f_logo} alt="footer-logo" />
                </div>

                <div className="footer-socials">
                <img src={facebook} alt="facebook" />
                <img src={insta} alt="insatgram" />
                <img src={twitter} alt="twitter" />
                </div>
            </div>

            <div className="footer-sec-2">
                <div>

                    <ul>
                        <h5>community</h5>
                        <li>NFT</li>
                        <li>Tokens</li>
                        <li>Landlords</li>
                        <li>Discord</li>
                    </ul>

                </div>

                <div>

                <ul>
                       <h5> Places</h5>
                        <li>Castle</li>
                        <li>Farms </li>
                        <li>Beach</li>
                        <li>Learn more</li>
                    </ul>

                </div>

                <div>

                <ul>
                        <h5>About us</h5>
                        <li>Road map</li>
                        <li>Creators </li>
                        <li>Career</li>
                        <li>Contact us</li>
                    </ul>

                </div>
            </div>

            
            </div>

            <div className="copyright">
            &copy; 2022 Metabnb
            </div>
        </footer>
        </>
    )
}

export default Footer