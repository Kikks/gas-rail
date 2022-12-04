const match = (
  option: string | number,
  options: {
    default: string | number;
    [key: string]: string | number;
  }
) => {
  return options[option] || options.default;
};

export default match;
