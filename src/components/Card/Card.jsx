import "./Card.css";
import chipLight from "../../assets/chip-light.svg";
import vendorBitcoin from "../../assets/vendor-bitcoin.svg";
import vendorBlockchain from "../../assets/vendor-blockchain.svg";
import vendorEvil from "../../assets/vendor-evil.svg";
import vendorNinja from "../../assets/vendor-ninja.svg";

const VendorLogo = ({ vendor }) => {
    if (vendor === "vendorBlockchain") {
        return <img className="card-vendorLogo" src={vendorBlockchain} />
    }

    if (vendor === "vendorEvil") {
        return <img className="card-vendorLogo" src={vendorEvil} />
    }

    if (vendor === "vendorNinja") {
        return <img className="card-vendorLogo" src={vendorNinja} />
    }

    return <img className="card-vendorLogo" src={vendorBitcoin} />
}

function Card({ card, index }) {
    const { cardName, cardNumber, valid, ccv, vendor, color } = card;

    return (
        <section className="card" style={{ backgroundColor: color }}>
            <img className="card-chip" src={chipLight} alt="Card chip." />
            <VendorLogo vendor={vendor} />
            <p className="card-cardNumber">{cardNumber}</p>
            <p className="card-cardholderTopic">CARDHOLDER NAME</p>
            <p className="card-cardholderName">{cardName}</p>
            <p className="card-validThruTopic">VALID THRU</p>
            <p className="card-validThruValue">{valid}</p>
        </section>
    )
}

export default Card;