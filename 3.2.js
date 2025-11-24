
let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let num of arr) {
    sum = sum + num;
}

let average = sum / arr.length;
console.log( "sum of all fears", average );