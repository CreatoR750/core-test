import "./customInput.scss";
const CustomInput = () => {
    return (
        <div className="custom-input">
            <input className="custom-input__input" type="text" placeholder="Enter your email" />
            <button className="custom-input__button">Join the Club</button>
        </div>
    );
};

export default CustomInput;
