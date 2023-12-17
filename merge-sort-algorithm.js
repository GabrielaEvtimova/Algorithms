/**
 * 
 * @param {array} array 
 * @returns sorted arrar in ascending order
 */
const mergeSortAscending = (array) => {

    // 1. Define the bottom - call the function until reach one element in the array
    if (array.length <= 1) {
        return array;
    }

    // 2. Divide 

    // 2.1. Define the middle:
    const middle = Math.floor(array.length / 2);

    // 3. Call the function again and again until it stops
    const left = mergeSortAscending(array.slice(0, middle));
    const right = mergeSortAscending(array.slice(middle));

    // 4. Process of comparing and merging

    // 4.1. Create an empty array to push the sorted elements
    const merged = [];

    // 4.2. Define start
    let leftIndex = 0;
    let rigthIndex = 0;

    // 4.3. Loop to check and sort
    while(leftIndex < left.length && rigthIndex < right.length) {
        if (left[leftIndex] < right[rigthIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
        } else if (left[leftIndex] >= right[rigthIndex]) {
            merged.push(right[rigthIndex]);
            rigthIndex++;
        }
    }

    // Return result and merge it with rest of the left and right
    return [...merged, ...left.slice(leftIndex), ...right.slice(rigthIndex)];
}

const numbers = [3, 4, 1, 65, 23, 0, 4, 1, 45, 20, 89, 5, 48];
console.log(mergeSortAscending(numbers));
/*
Expected output:
[
   0,  1,  1,  3,  4,  4,
   5, 20, 23, 45, 48, 65,
  89
]
*/

const bands = ['Slipknot', 'Depeche Mode', 'Metallica', 'Deftones', 'Korn', 'System of a Down' ]
console.log(mergeSortAscending(bands));
/* 
Expected output:
[
  'Deftones',
  'Depeche Mode',
  'Korn',
  'Metallica',
  'Slipknot',
  'System of a Down'
]
*/




/**
 * 
 * @param {array} array 
 * @returns sorted arrar in descending order
 */
const mergeSortDescending = (array) => {

    // 1. Define the bottom - call the function until reach one element in the array
    if (array.length <= 1) {
        return array;
    }

    // 2. Divide 

    // 2.1. Define the middle:
    const middle = Math.floor(array.length / 2);

    // 3. Call the function again and again until it stops
    const left = mergeSortDescending(array.slice(0, middle));
    const right = mergeSortDescending(array.slice(middle));

    // 4. Process of comparing and merging

    // 4.1. Create an empty array to push the sorted elements
    const merged = [];

    // 4.2. Define start
    let leftIndex = 0;
    let rigthIndex = 0;

    // 4.3. Loop to check and sort
    while(leftIndex < left.length && rigthIndex < right.length) {
        if (left[leftIndex] > right[rigthIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
        } else if (left[leftIndex] <= right[rigthIndex]) {
            merged.push(right[rigthIndex]);
            rigthIndex++;
        }
    }

    // Return result and merge it with rest of the left and right
    return [...merged, ...left.slice(leftIndex), ...right.slice(rigthIndex)];
}

const nums = [3, 4, 1, 65, 23, 0, 4, 1, 45, 20, 89, 5, 48];
console.log(mergeSortDescending(nums));
/*
Expected output:
[
  89, 65, 48, 45, 23, 20,
   5,  4,  4,  3,  1,  1,
   0
]
*/

const metalBands = ['Slipknot', 'Depeche Mode', 'Metallica', 'Deftones', 'Korn', 'System of a Down' ]
console.log(mergeSortDescending(metalBands));
/* 
Expected output:
[
  'System of a Down',
  'Slipknot',
  'Metallica',
  'Korn',
  'Depeche Mode',
  'Deftones'
]
*/