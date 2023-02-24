import "./TotalCards.css";
import Card from "../Card/Card";

function TotalCards({ cards }) {

    return (
        <article className="totalCards">
            {cards.map((card, index) => {
                return <Card key={index} card={card} />
            })}
        </article>
    )
}

export default TotalCards;