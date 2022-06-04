import { PropTypes } from "prop-types";
import { useState } from "react";
import { CreditCardContext } from "../contexts/CreditCardProvider";

import NumberInput from "../Inputs/NumberInput";
import { CARD_NUMBER_LENGTH } from "./../../helpers/constants";
import CardTypeImage from "./../ImageElements/CardTypeImage";
import { useContext } from "react";

export default function CreditCardBody() {
  const [state, setState] = useContext(CreditCardContext);

  const { cardNumber } = state;
  const setCardNumber = (value) => setState({ ...state, cardNumber: value });

  const [hideCardNumberInput, setHideCardNumberInput] = useState(true);
  const formattedCardNumber =
    cardNumber.length === CARD_NUMBER_LENGTH
      ? cardNumber.replace(/(\d{4}).*(\d{4})/g, "$1********$2")
      : cardNumber;

  const cardNumberInputIsHidden = () => setHideCardNumberInput(true);
  const cardNumberInputIsVisible = () => setHideCardNumberInput(false);
  const onCardNumberChange = (e) => setCardNumber(e.target.value);

  return (
    <div className="CreditCardBody">
      <CardTypeImage cardNumber={cardNumber} />
      <b className="cardText">
        <NumberInput
          id="cardNumber"
          name="cardNumber"
          placeholder="Card Number"
          value={cardNumber}
          onChange={onCardNumberChange}
          maxLength={CARD_NUMBER_LENGTH}
          onBlur={cardNumberInputIsHidden}
          numberInputIsVisible={cardNumberInputIsVisible}
          hideNumberInput={hideCardNumberInput}
          formattedNumber={formattedCardNumber}
        />
      </b>
    </div>
  );
}

CreditCardBody.propTypes = {
  cardNumber: PropTypes.string,
  setCardNumber: PropTypes.func,
};

CreditCardBody.displayName = "CreditCardBody";
