import { useState } from "react";
import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";
import "./NewCard.css";

function NewCard({setCards}) {
    const [newCardInfo, setNewCardInfo] = useState({
        cardNumber: "XXX XXX XXX XXX",
        cardName: "FIRSTNAME LASTNAME",
        valid: "MM/YY",
        ccv: "",
        vendor: "",
        color: "#FFAE34"
    });

    function setNewCardColorAndLogo(newColor, newLogo) {
        setNewCardInfo((prev) => ({...prev, color: newColor, vendor: newLogo}));
    }

    return (
        <section className="newCard-section">
            <h1 className="newCard-header">ADD A NEW BANK CARD</h1>
            <div className="cardAndFormsWrapper">
                <p className="newCard-topText">NEW CARD</p>
                <Card card={newCardInfo} />
                <CardForm setNewCardColorAndLogo={setNewCardColorAndLogo} setCards={setCards} />
            </div>
        </section>
    )
}

export default NewCard;