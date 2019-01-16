// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    // start implementation of bubble sort
    for (let i = 0; i < arr.length; i++) {
        // -1 added to ensure that it does not iterate out of bounds
        // array 0 indexed so if minus by nothing, last element will be out of bounds
        for (let j = 0; j < (arr.length - i - 1);  j++) {
            if (arr[j] > arr[j + 1]) {
                // swap the two values using a temp value
                const lesser  = arr[j + 1] ;
                arr[j + 1] = arr[j];
                arr[j] = lesser; 
            }
        }
    }
    // return the sorted array
    return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
