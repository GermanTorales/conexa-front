export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

export const invertColor = (color) => {
  if (color.indexOf("#") === 0) color = color.slice(1);

  // invert color components
  const r = (255 - parseInt(color.slice(0, 2), 16)).toString(16);
  const g = (255 - parseInt(color.slice(2, 4), 16)).toString(16);
  const b = (255 - parseInt(color.slice(4, 6), 16)).toString(16);

  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
};

export const padZero = (str, len) => {
  len = len || 2;
  const zeros = new Array(len).join("0");

  return (zeros + str).slice(-len);
};
