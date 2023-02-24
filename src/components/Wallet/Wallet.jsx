import { useNavigate } from "react-router-dom";

import ActiveCard from "../ActiveCard/ActiveCard";
import TotalCards from "../TotalCards/TotalCards";

import "./Wallet.css";

let lastCardClickedOn = 0;

function Wallet({ cards, setCards }) {
    const navigate = useNavigate()

    function handleWalletBtn() {
        if (cards.length > 3) {
            console.log("You can only have four cards.");
            navigate("/");
            return;
        }

        navigate("/newcard")
    }

    function handleCardClick(cardClicked) {
        lastCardClickedOn = cardClicked;
        setCards((prev) => ([...prev]));
    }

    return (
        <section className="wallet-section">
            <h1 className="wallet-header">E-WALLET</h1>
            {(cards.length < 1) ? <p className="wallet-noCards">No cards to display.</p> : (
                <article className="cardsWrapper">
                    <article className="wallet-cardBoxActive">
                        <ActiveCard cards={cards[lastCardClickedOn]} />
                    </article>
                    <article className="wallet-cardBoxTotal">
                        <TotalCards cards={cards} handleCardClick={handleCardClick} />
                    </article>
                </article>)}
            <button className="wallet-btn" onClick={handleWalletBtn}>ADD A NEW CARD</button>
        </section >
    )
}

export default Wallet;