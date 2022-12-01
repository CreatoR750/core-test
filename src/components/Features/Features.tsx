import "./features.scss";
import lighting from "../../assets/svg/lighting.svg";
import design from "../../assets/svg/design.svg";
import security from "../../assets/svg/security.svg";
import useWindowSize from "../../hooks/useWindowSize";

const Features = () => {
    const size = useWindowSize();

    return (
        <div className="container">
            <div className="features">
                <div className="features__title">
                    <div className="features__title__bar">{size.width! > 670 ? "Features to help you do more" : "The power to do more"}</div>
                    <h2 className="features__title__text">A headline about our features & service</h2>
                </div>
                <div className="features__cards">
                    <div className="card">
                        <img src={lighting} alt="lighting" />
                        <span className="card__title">Lighting fast</span>
                        <span className="card__info">Use this text to describe your product feature or service.</span>
                    </div>
                    <div className="card">
                        <img src={design} alt="design" />
                        <span className="card__title">Clean design</span>
                        <span className="card__info">Use this text to describe your product feature or service.</span>
                    </div>
                    <div className="card">
                        <img src={security} alt="security" />
                        <span className="card__title">Advanced security</span>
                        <span className="card__info">Use this text to describe your product feature or service.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
