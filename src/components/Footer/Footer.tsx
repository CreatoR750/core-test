import "./footer.scss";
import logoBlack from "../../assets/svg/logoBlack.svg";
import google from "../../assets/img/google.png";
import appStore from "../../assets/img/appStore.png";
import useWindowSize from "../../hooks/useWindowSize";
import googlePlay from "../../assets/img/googlePlay.png";

const Footer = () => {
    const size = useWindowSize();

    if (size.width! < 670) {
        return (
            <footer className="mobile-footer">
                <div className="mobile-footer__wrapper">
                    <div className="mobile-footer__columns">
                        <div className="column">
                            <span className="column__title">Features</span>
                            <span className="column__link">Products</span>
                            <span className="column__link">Features</span>
                            <span className="column__link">Updates</span>
                            <span className="column__link">Account</span>
                        </div>
                        <div className="column">
                            <span className="column__title">About</span>
                            <span className="column__link">Privacy</span>
                            <span className="column__link">License</span>
                            <span className="column__link">Updates</span>
                        </div>
                        <div className="column">
                            <span className="column__title">Social</span>
                            <span className="column__link">Twitter</span>
                            <span className="column__link">Instagram</span>
                            <span className="column__link">Dribbble</span>
                        </div>
                    </div>
                    <div className="mobile-footer__rows">
                        <span className="mobile-footer__rows__title">Get the app</span>
                        <button className="download-btn">
                            <div className="download-btn__text">
                                <span>Download on</span> App Store
                            </div>
                        </button>
                        <button className="download-btn">
                            <img src={googlePlay} alt="" />
                            <div className="download-btn__text">
                                <span>Get it on</span> Google Play
                            </div>
                        </button>
                        <div className="mobile-footer__rows__company">
                            <div className="logo">
                                <img src={logoBlack} alt="logo" />
                                <span>Company</span>
                            </div>
                            <div className="company">© 2099 Company</div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

    return (
        <footer className="container">
            <div className="footer">
                <div className="footer__wrapper">
                    <div className="column">
                        <div className="column__logo">
                            <img src={logoBlack} alt="logo" />
                            <span>Company</span>
                        </div>
                        <div className="column__company">© 2099 Company</div>
                    </div>
                    <div className="column">
                        <span className="column__title">Features</span>
                        <span className="column__link">Products</span>
                        <span className="column__link">Features</span>
                        <span className="column__link">Updates</span>
                        <span className="column__link">Account</span>
                    </div>
                    <div className="column">
                        <span className="column__title">About</span>
                        <span className="column__link">Privacy</span>
                        <span className="column__link">License</span>
                        <span className="column__link">Updates</span>
                    </div>
                    <div className="column">
                        <span className="column__title">Social</span>
                        <span className="column__link">Twitter</span>
                        <span className="column__link">Instagram</span>
                        <span className="column__link">Dribbble</span>
                    </div>
                    <div className="column">
                        <span className="column__title">Get the app</span>
                        <img className="column__img" src={google} alt="google" />
                        <img className="column__img" src={appStore} alt="appStore" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
