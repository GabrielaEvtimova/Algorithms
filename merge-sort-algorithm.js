const mergeSort = (array) => {

    // 1. Define the bottom - call the function until reach one element in the array
    if (array.length <= 1) {
        return array;
    }

    // 2. Divide 

    // 2.1. Define the middle:
    const middle = Math.floor(array.length / 2);

    // 3. Call the function again and again until it stops
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));

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

const data = [3, 4, 1, 65, 23, 0, 4, 1, 45, 20, 89, 5, 48];
console.log(mergeSort(data));
/*
Expected output:
[
   0,  1,  1,  3,  4,  4,
   5, 20, 23, 45, 48, 65,
  89
]
*/

const strings = ['Slipknot', 'Depeche Mode', 'Metallica', 'Deftones', 'Korn', 'System of a Down' ]
console.log(mergeSort(strings));
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