import Card from "../Card/Card";

import "./ActiveCard.css";

function ActiveCard({ cards }) {

    return (
        <>
            <p className="card-topText">ACTIVE CARD</p>
                <Card card={cards} />
        </>
    )
}

export default ActiveCard;