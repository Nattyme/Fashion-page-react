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
                       
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;