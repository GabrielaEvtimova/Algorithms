const arr = [3, 4, 1, 65, 23, 0, 4, 1, 45, 20, 89, 5, 48];

// Count of operations
let count = 0;


// Bubble Sort
for (let i = 0; i < arr.length; i++) {

    for (let j = 1; j < arr.length - i; j++) {

        // Check for each element and swap with the previous one if it's higher
        if (arr[j - 1] > arr[j]) {
            const temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
        }
        
        count++;
    }
}

console.log(arr);
/*
 Expected output:
 [
   0,  1,  1,  3,  4,  4,
   5, 20, 23, 45, 48, 65,
  89
]
 */
console.log(count); // 78 steps if we use arr.length - 1 in the nested loop
// console.log(count); // 156 steps if we use the whole arr length