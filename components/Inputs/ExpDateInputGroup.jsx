import { PropTypes } from "prop-types";
import { YEAR_LENGTH } from "../../helpers/constants";
import NumberInput from "./NumberInput";
import { MONTH_LENGTH } from "./../../helpers/constants";
import { CreditCardContext } from "../contexts/CreditCardProvider";
import { useContext } from "react";

export default function ExpDateInputGroup(props) {
  const [state, setState] = useContext(CreditCardContext);

  const { expirationMonth, expirationYear } = state;
  const setExpirationMonth = (value) =>
    setState({ ...state, expirationMonth: value });
  const onChangeMonth = (e) => setExpirationMonth(e.target.value);
  const setExpirationYear = (value) =>
    setState({ ...state, expirationYear: value });
  const onChangeYear = (e) => setExpirationYear(e.target.value);

  return (
    <span
      className={
        props.className + " ExpDateInputGroup expiration w-xLarge flex"
      }
    >
      <NumberInput
        id="month"
        name="month"
        placeholder="MM"
        size="1"
        maxLength={MONTH_LENGTH}
        value={expirationMonth}
        onChange={onChangeMonth}
      />
      <span>/</span>
      <NumberInput
        id="year"
        type="text"
        name="year"
        placeholder="YYYY"
        size="4"
        maxLength={YEAR_LENGTH}
        value={expirationYear}
        onChange={onChangeYear}
      />
    </span>
  );
}

ExpDateInputGroup.propTypes = {
  className: PropTypes.string,
};

ExpDateInputGroup.displayName = "ExpDateInputGroup";
