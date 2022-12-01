import { useState } from "react";
import { IQuestion } from "../../models/question";
import Accordion from "../Accordion/Accordion";
import "./questions.scss";
import { questions } from "../../const/questions";

const Questions = () => {
    const [items, setItems] = useState<IQuestion[]>(questions);
    return (
        <div className="container">
            <div className="questions">
                <div className="questions__title">
                    <h2>FAQ</h2>
                    <span>Popular questions.</span>
                </div>
                <div className="questions__wrapper">
                    {items.map((item) => (
                        <Accordion key={item.id} id={item.id} title={item.title} info={item.info} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Questions;
