export const getPlayerAge = (playerAge: number) => {
  const currentYear = new Date().getFullYear();
  return currentYear - playerAge;
};
