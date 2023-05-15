export const generateRandomPages = () => {
  const numbers = [];
  while (numbers.length < 3) {
    const number = Math.ceil(Math.random() * 6);
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers;
};
