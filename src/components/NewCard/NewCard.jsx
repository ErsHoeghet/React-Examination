import { useState } from "react";
import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";
import "./NewCard.css";

function NewCard({ cards, setCards, generatedCardNumber }) {
    const standardValues = {
        cardNumber: generatedCardNumber,
        cardName: "FIRSTNAME LASTNAME",
        valid: "MM/YY",
        ccv: "",
        vendor: "vendorBitcoin",
        color: "#FFAE34"
    }

    const [newCardInfo, setNewCardInfo] = useState(standardValues);

    function setNewCardColorAndLogo(newColor, newLogo) {
        setNewCardInfo((prev) => ({ ...prev, color: newColor, vendor: newLogo }));
    }

    return (
        <section className="newCard-section">
            <h1 className="newCard-header">ADD A NEW BANK CARD</h1>
            <div className="cardAndFormsWrapper">
                <p className="newCard-topText">NEW CARD</p>
                <article className="newCard-cardBox">
                    <Card card={newCardInfo} />
                </article>
                <CardForm setNewCardColorAndLogo={setNewCardColorAndLogo} cards={cards} setCards={setCards} generatedCardNumber={generatedCardNumber} standardValues={standardValues} />
            </div>
        </section>
    )
}

export default NewCard;