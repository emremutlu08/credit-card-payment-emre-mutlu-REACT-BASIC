import CreditCardBody from "./CreditCardBody";
import { useState } from "react";
import CreditCardBack from "./CreditCardBack";
import isValidCardNumber from "./../../helpers/isValidCardNumber";
import isValidMonth from "./../../helpers/isValidMonth";
import isValidYear from "./../../helpers/isValidYear";
import isValidCCV from "./../../helpers/isValidCCV";
import { CreditCardContext } from "../contexts/CreditCardProvider";
import { useContext } from "react";

export default function CreditCardForm() {
  const [isBackVisible, setIsBackVisible] = useState(false);

  const [state] = useContext(CreditCardContext);

  const { cardNumber, expirationMonth, expirationYear, ccv } = state;

  const onSubmit = async () => {
    const exp = expirationMonth + "/" + expirationYear.slice(2);

    if (
      !isValidCardNumber(cardNumber) ||
      !isValidMonth(expirationMonth) ||
      !isValidYear(expirationYear) ||
      !isValidCCV(ccv)
    ) {
      return alert(`
      One of them is NOT valid!
          {
            number: ${cardNumber} isValid: ${isValidCardNumber(cardNumber)},
            exp: ${exp} isValidMonth: ${isValidMonth(
        expirationMonth
      )} || isValidYear: ${isValidYear(expirationYear)},
            ccv: ${ccv} isValid: ${isValidCCV(ccv)},
          }
      `);
    }
    const cardObject = {
      number: cardNumber,
      exp,
      ccv,
    };
    const response = await fetch("/api/is-card-valid", {
      method: "POST",
      body: JSON.stringify(cardObject),
    });
    const result = await response.json();

    if (result.isValid) return alert("Card is valid!");
    return alert("Card is NOT valid!");
  };

  const flipBack = () => setIsBackVisible(!isBackVisible);

  return (
    <div className="flex column space-evenly gap-small">
      {!isBackVisible ? <CreditCardBody /> : <CreditCardBack />}
      <div className="flex gap-small">
        <button className="flipButton" type="button" onClick={flipBack}>
          Flip
        </button>
        <button className="submitButton" type="submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
