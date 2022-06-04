import { PropTypes } from "prop-types";
import isValidCardNumber from "../../helpers/isValidCardNumber";

export default function NumberInput(props) {
  const {
    formattedNumber,
    hideNumberInput,
    numberInputIsVisible,
    ...inputProps
  } = props;

  if (numberInputIsVisible) {
    if (hideNumberInput && formattedNumber) {
      return (
        <>
          <div
            className={
              !isValidCardNumber(props.value) &&
              "notValidBorder " + "formattedNumber"
            }
            onClick={numberInputIsVisible}
          >
            {formattedNumber}
          </div>
        </>
      );
    } else {
      numberInputIsVisible();
    }
  }

  return (
    <input
      type="text"
      {...inputProps}
      className={props.className + "NumberInput w-xLarge"}
    />
  );
}

NumberInput.propTypes = {
  className: PropTypes.string,
  hideNumberInput: PropTypes.bool,
  numberInputIsVisible: PropTypes.func,
  formattedNumber: PropTypes.string,
  value: PropTypes.string,
};

NumberInput.displayName = "NumberInput";
