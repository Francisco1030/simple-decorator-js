export default (method, property, args) => {
  console.time(property);
  const result = method(...args);
  console.timeEnd(property);
  return result;
};
