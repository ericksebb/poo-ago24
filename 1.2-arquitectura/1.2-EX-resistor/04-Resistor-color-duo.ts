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

export function decodedValue(bands: string[]): number {
  return colorsValues.indexOf(bands[0]) * 10 + colorsValues.indexOf(bands[1]);
}
decodedValue(["red", "red"]);
