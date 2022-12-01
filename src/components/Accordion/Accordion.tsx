import "./accordion.scss";
import cheveronDown from "../../assets/svg/cheveronDown.svg";
import cheveronUp from "../../assets/svg/cheveronUp.svg";
import { FC, useState } from "react";
import { IQuestion } from "../../models/question";

const Accordion: FC<IQuestion> = ({ id, title, info }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="accordion" onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <div className="accordion__title">
                <span>{title}</span>
                {isOpen ? <img src={cheveronUp} alt="cheveronDown" /> : <img src={cheveronDown} alt="cheveronDown" />}
            </div>
            {isOpen && (
                <div className="accordion__container">
                    {info.map((info, index) => (
                        <div key={index} className="accordion__info">
                            {info}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Accordion;
