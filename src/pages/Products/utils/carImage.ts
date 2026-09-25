export const carImage = (brand: string, model: string) => {
  return `https://carapi.trustcar.info/getImage?make=${encodeURIComponent(
    brand,
  )}&model=${encodeURIComponent(model)}`;
};
