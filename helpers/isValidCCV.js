// Check if CCV is valid
const isValidCCV = (ccvString) => {
  const ccv = parseInt(ccvString);

  return !(ccv < 100 || ccv > 999);
};

export default isValidCCV;
