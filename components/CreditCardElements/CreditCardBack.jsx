import { PropTypes } from "prop-types";
import ExpDateInputGroup from "./../Inputs/ExpDateInputGroup";
import NumberInput from "./../Inputs/NumberInput";
import { CCV_LENGTH } from "../../helpers/constants";
import { CreditCardContext } from "../contexts/CreditCardProvider";
import { useContext } from "react";

export default function CreditCardBack(props) {
  const [state, setState] = useContext(CreditCardContext);

  const { ccv } = state;
  const setCcv = (value) => setState({ ...state, ccv: value });

  const onCcvChange = (e) => setCcv(e.target.value);

  return (
    <div {...props} className="CreditCardBody CreditCardBodyBack gap-small">
      <>
        <ExpDateInputGroup />

        <NumberInput
          id="ccv"
          name="ccv"
          placeholder="CCV"
          value={ccv}
          maxLength={CCV_LENGTH}
          onChange={onCcvChange}
        />
      </>
    </div>
  );
}

CreditCardBack.propTypes = {
  /*
          expirationMonth={expirationMonth}
          setExpirationMonth={setExpirationMonth}
          expirationYear={expirationYear}
          setExpirationYear={setExpirationYear}
          ccv={ccv}
          setCcv={setCcv}
*/
  expirationMonth: PropTypes.string,
  setExpirationMonth: PropTypes.func,
  expirationYear: PropTypes.string,
  setExpirationYear: PropTypes.func,
  ccv: PropTypes.string,
  setCcv: PropTypes.func,
};

CreditCardBack.displayName = "CreditCardBack";
