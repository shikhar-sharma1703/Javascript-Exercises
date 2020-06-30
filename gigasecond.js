export const gigasecond = (startDate) => {
  let ms = startDate.getTime()
  let result = new Date(ms + 10e11);
  return result
};
