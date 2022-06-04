// Check if year is valid
const isValidYear = (yearString) => {
  const year = parseInt(yearString);

  return !(year < 2022 || year > 2050);
};

export default isValidYear;
