// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    // start implementation of bubble sort
    for (let i = 0; i < arr.length; i++) {
        // -1 added to ensure that it does not iterate out of bounds
        // array 0 indexed so if minus by nothing, last element will be out of bounds
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                // swap the two values using a temp value
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    // return the sorted array
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // assume index is the lowest value of the array
        let indexOfMin = i;
        // for each of the additional elements after i, update indexOfMin if it smaller than the assumed smaller value of "i"
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        //if the indexOfMin is not i, it has been reassigned, so there must have been a smaller value
        // swap is done by storing lesser value, assigning the array at the index of the new found lowest value  to the array at index i
        // then assign the array at index i to the new found lowest value   
        if (indexOfMin !== i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = i;
            arr[i] = lesser;
        }
    }

    // return the sorted array 
    return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {
    const results = [];
    // while either array has something, compare which array has the smaller value
    // put the smaller value into the results array
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            ;
            results.push(right.shift());
        }
    }

    // spread the rest of the values and the sorted array into a new array and return it
    // this work because one of the arrays is going to be totally empty
     return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort };
