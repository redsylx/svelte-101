export const getRandomNumber = (min: number, max: number): number => {
  if (min > max) {
    throw new Error("Min value must be less than max value");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}