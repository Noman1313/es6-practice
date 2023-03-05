// function doubleIt(num) {
//     return num * 2;
// }
// const doubleIt = function (num){
//    return num * 2;
// }

// arrow function
// 1
const doubleIt = num => num * 2;

const result1 = doubleIt(7);
console.log(result1);

// 2
const add = (x, y) => x + y;

const sunn = add(33, 4);
console.log(sunn);

// 3
const give5 = () => 6;

const num = give5();
console.log(num);

// 4
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = doMath(7, 5);
console.log(result);
