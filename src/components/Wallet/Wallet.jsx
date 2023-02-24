import { Link } from "react-router-dom";

import ActiveCard from "../ActiveCard/ActiveCard";
import TotalCards from "../TotalCards/TotalCards";

import "./Wallet.css";

function Wallet({ cards }) {

    return (
        <section className="wallet-section">
            <h1 className="wallet-header">E-WALLET</h1>
            {(cards.length < 1) ? <p className="wallet-noCards">No cards to display.</p> : (
                <article className="cardsWrapper">
                    <ActiveCard cards={cards[0]}/>
                    <TotalCards cards={cards} />
                </article>)}
            < Link to="/newcard" className="wallet-btn">ADD A NEW CARD</Link>
        </section >
    )
}

export default Wallet;