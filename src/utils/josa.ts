const 이가 = (name: string) => {
  const lastChar = name.charCodeAt(name.length - 1);
  const isThereLastChar = (lastChar - 0xac00) % 28;
  if (isThereLastChar) {
    return `${name}이`;
  }
  return `${name}가`;
};

export default {
  이가,
};
