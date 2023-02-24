import Card from "../Card/Card";

import "./ActiveCard.css";

function ActiveCard(props) {
    const { cards } = props;

    return (
        <>
            <p className="card-topText">ACTIVE CARD</p>
            <article className="activeCard">
                <Card card={cards} />
            </article>
        </>
    )
}

export default ActiveCard;