const arr = [];
for (let i = 0; i < 30; i++) arr.push(Math.floor(Math.random() * 1000 - 500));
// console.log(arr);

/**
 * 1. Output: arr, sorted in ascending order
 * 2. Output: arr, sorted in descending order
 * 3. Output: number, iterations required for sorting arr in asc order
 * 4. Output: number, that is Arithmetic mean
 * 5.** Output: arr, sorted by asc independently on -/+ (by module)
 */

//<------------------------------------------------------------------------------------>
//done
const ascSort = (arr) => {
  console.log(arr.sort((a, b) => a - b));
}

ascSort(arr)


const descSort = (arr) => {
  console.log(arr.sort((a, b) => b - a));
};

descSort(arr)



const arithMean = (arr) => {
    let sum = 0;
    let res;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    res = sum / arr.length;
    return res

};

console.log(arithMean(arr));


let i = 0;

const countIterationsForSorting = (arr) => {
  arr.sort((a,b) => {
    a-b;
    i++
  });

  return i;
};

console.log(countIterationsForSorting(arr));


const moduleSort = (arr) => {
  console.log(arr.sort((a, b) => Math.abs(a) - Math.abs(b)));
};

moduleSort(arr);

//done
//<------------------------------------------------------------------------------------>