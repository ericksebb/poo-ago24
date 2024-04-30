const colorsValues = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const decodedResistorValue = ([
  first,
  second,
  zeros,
]: Array<string>): string => {
  const baseValue = `${colorsValues.indexOf(first)}${colorsValues.indexOf(
    second
  )}`;

  let value = Number(baseValue) * 10 ** colorsValues.indexOf(zeros);
  let unit = "ohms";
  if (value >= 1000000) {
    value /= 1000000;
    unit = "gigaohms";
  } else if (value >= 1000) {
    value /= 1000;
    unit = "megaohms";
  }
  return `${value} ${unit}`;
};
