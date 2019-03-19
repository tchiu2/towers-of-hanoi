export const colorPicker = value => {
  const l = `${57 - (value * 25)}%`;
  return `hsl(3, 76%, ${l})`;
}
