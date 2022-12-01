import CustomInput from "../CustomInput/CustomInput";
import Header from "../Header/Header";
import "./hero.scss";
import star from "../../assets/svg/star.svg";
import useWindowSize from "../../hooks/useWindowSize";

const Hero = () => {
    const size = useWindowSize();
    return (
        <div className="container">
            <div className="hero">
                <Header />
                <div className="hero__form">
                    <h1 className="hero__form__title">
                        A <span>headline</span> to turn visitors into clients
                    </h1>
                    <div className="hero__form__subtitle">A descriptive secondary text placeholder to better explain your business offer.</div>
                    <div className="hero__form__input">
                        <CustomInput />
                    </div>
                    <div className="hero__form__rating">
                        <div className="rating">
                            <div className="rating__rate">
                                <span>4.9</span>
                                <img src={star} alt="Star" />
                            </div>
                            <div className="rating__reviews">
                                {size.width! > 670 ? "Over 5k positive customer reviews" : "Positively rated by 5k+ users"}
                            </div>
                        </div>
                        <div className="transactions">
                            <div className="transactions__count">$2M+</div>
                            <div className="transactions__text">{size.width! > 670 ? "Global transactions": "Worldwide transactions" }</div>
                        </div>
                    </div>
                </div>
                <div className="hero__image"></div>
            </div>
        </div>
    );
};

export default Hero;
