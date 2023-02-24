import "./TotalCards.css";
import Card from "../Card/Card";

function TotalCards({ cards, handleCardClick }) {
    return (
        <>
            {cards.map((card, index) => {
                
                return (
                    <div key={index} className="absoluteBox" onClick={() => handleCardClick(index)} style={{
                        position: 'absolute',
                        top: `${((index + 1) * 3)}rem`
                    }}>
                        <Card key={index} card={card} />
                    </div>
                )
            })}
        </>
    )
}

export default TotalCards;