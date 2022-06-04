import React, { useState } from "react";
import PropTypes from "prop-types";

const CreditCardContext = React.createContext([{}, () => {}]);

const initialState = {
  cardNumber: "",
  expirationMonth: "",
  expirationYear: "",
  ccv: "",
};

/* Component Function */
const CreditCardProvider = (props) => {
  const [state, setState] = useState(initialState);

  return (
    <CreditCardContext.Provider value={[state, setState]}>
      {props.children}
    </CreditCardContext.Provider>
  );
};

CreditCardProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { CreditCardContext, CreditCardProvider };
