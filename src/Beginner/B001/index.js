/*
 * @param {integer} n
 * @return {integer}
 */
const Main = n => {
  const binary = parseInt(n, 10).toString(2);
  //console.log(`The binary representation of ${n} is ${binary} `)
  const arr = binary.split("");
  let max = [];
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) === 1) {
      count++;
    } else {
      count = 0;
    }
    max.push(count);
  }
  const output = max.sort((a, b) => b - a)[0];
  return output;
};
module.exports.Main = Main;
