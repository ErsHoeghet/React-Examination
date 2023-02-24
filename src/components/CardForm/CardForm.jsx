import "./CardForm.css";
import { useNavigate } from "react-router-dom";

const vendors = [
    { val: "bitcoininc", text: "BITCOIN INC", color: "#FFAE34", logo: "vendorBitcoin" },
    { val: "ninjabank", text: "NINJA BANK", color: "#353535", logo: "vendorNinja" },
    { val: "blockchaininc", text: "BLOCK CHAIN INC", color: "#8151E5", logo: "vendorBlockchain" },
    { val: "evilcorp", text: "EVIL CORP", color: "#DE2F4E", logo: "vendorEvil" }
];

let color = "#FFAE34";
let vendorLogo = "vendorBitcoin";

function CardForm({ setNewCardColorAndLogo, cards, setCards, generatedCardNumber, standardValues }) {
    const navigate = useNavigate()

    let newCard = standardValues;

    function setColorToCard(event) {
        vendors.map((vendor) => {
            if (event.target.value === vendor.val) {
                setNewCardColorAndLogo(vendor.color, vendor.logo)
                color = vendor.color;
                vendorLogo = vendor.logo
            }
        })
    }

    function handleAddCard(e) {
        e.preventDefault();

        const { cardholdername, validthru, vendor } = e.target;

        newCard = {
            cardNumber: generatedCardNumber,
            cardName: cardholdername.value,
            valid: validthru.value,
            ccv: "123",
            vendor: vendorLogo,
            color: color
        }

        setCards((prev) => ([...prev, newCard]));

        navigate("/");
    }

    return (
        <div className="formWrapper">
            <form className="formBox" onSubmit={handleAddCard}>
                <p className="pElemTweaks">CARD NUMBER</p>
                <input type="text" name="cardnumber" id="cardNumber" className="textInputStyle" defaultValue={generatedCardNumber} disabled />
                <p className="pElemTweaks">CARDHOLDER NAME</p>
                <input type="text" name="cardholdername" placeholder="FIRSTNAME LASTNAME" id="cardHolderName" className="textInputStyle" />
                <div className="validCcvWrapper">
                    <div className="validWrapper">
                        <p className="pElemTweaks">VALID THRU</p>
                        <input type="text" name="validthru" id="validThru" className="textInputStyle" />
                    </div>
                    <div className="ccvWrapper">
                        <p className="pElemTweaks">CCV</p>
                        <input type="text" name="ccv" id="ccv" className="textInputStyle" />
                    </div>
                </div>
                <p>VENDOR</p>
                <select name="vendor" id="vendor" onChange={(event) => setColorToCard(event)}>
                    {vendors.map((vendor, index) =>
                        <option key={index} value={vendor.val}>{vendor.text}</option>
                    )}
                </select>
                <button className="newCard-btn" type="submit">ADD CARD</button>
            </form>
        </div>
    )


}

export default CardForm;