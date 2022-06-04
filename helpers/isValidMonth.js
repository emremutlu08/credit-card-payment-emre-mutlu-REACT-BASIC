const isValidMonth = (monthString) => {
  // Check if month is valid
  const month = parseInt(monthString);

  return !(month < 1 || month > 12);
};

export default isValidMonth;
