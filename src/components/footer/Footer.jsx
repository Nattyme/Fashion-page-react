import "./footer.css";
import fbImg from "./../../img/socials/fb.svg";
import instImg from "./../../img/socials/inst.svg";
import twImg from "./../../img/socials/tw.svg";
import inImg from "./../../img/socials/in.svg";

const Footer = () => {
    return (  
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__subscribe">
                        <div className="footer__logo">FASHION</div>
                        <div className="footer__text">Complete your style with awesome clothes from us.</div>
                        <div className="footer__socials">
                            <img src={fbImg} alt="facebook" />
                            <img src={instImg} alt="instagram" />
                            <img src={twImg} alt="twitter" />
                            <img src={inImg} alt="LinkedIn" />
                        </div>
                    </div>
                    <div className="footer__nav">
                       <ul className="nav__company">
                        <li className="nav__title"><a href="#!">Company</a></li>
                        <li><a href="#!">About</a></li>
                        <li><a href="#!">Contact us</a></li>
                        <li><a href="#!">Support</a></li>
                        <li><a href="#!">Careers</a></li>
                       </ul>
                       <ul className="nav__link">
                       <li className="nav__title">Quick Link<a href="#!"></a></li>
                        <li><a href="#!">Share Location</a></li>
                        <li><a href="#!">Orders Tracking</a></li>
                        <li><a href="#!">Size Guide</a></li>
                        <li><a href="#!">FAQs</a></li>
                       </ul>
                       <ul className="nav__legal">
                       <li className="nav__title">Legal<a href="#!"></a></li>
                        <li><a href="#!">Terms & conditions</a></li>
                        <li><a href="#!">Privacy Policy</a></li>
                       </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;