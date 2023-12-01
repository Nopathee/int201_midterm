const sum = (n1, n2) => {
  return n1 + n2;
};
const section = "Group 1";
// common js
// module.exports = {sum: sum , section: section}

export { sum as default, section };
