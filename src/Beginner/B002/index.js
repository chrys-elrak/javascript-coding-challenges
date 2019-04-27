/*
 * @param {array} arr
 * @return {integer}
 */
const Main = arr =>{
    //put the element, which value is i, in position i – 1.
    let i = 0;
    while (i <arr.length) {
        if (arr[i] !== i + 1 && arr[i] >= 1 && arr[i] <= arr.length && arr[arr[i] - 1] !== arr[i]) {
            let tmp = arr[arr[i] - 1];
            arr[arr[i] - 1] = arr[i];
            arr[i] = tmp;
        } else {
            i++;
        }
    }
    //go through the array to find the first missing positive integer.
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1){
            return i + 1;
        }
    }
    return arr.length + 1;
};
module.exports.Main = Main;
