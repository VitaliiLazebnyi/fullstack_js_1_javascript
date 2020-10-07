// Реализовать функцию для сравнения двух массивов,
// сравнение должно попарно сравнивать каждый элемент

array1 = [0, 3, 4];
array2 = [0, 3, 4, 1];

// Function will return
// -1 if 1st array is 'bigger'
//  0 if they are equal
//  1 if 2nd array is 'bigger'
function compare_elements(el1, el2) {
    if (el1 == el2) {
        return 0;
    }

    return el1 > el2 ? -1 : 1
}

// Function will return
// -1 if 1st array is 'bigger'
//  0 if they are equal
//  1 if 2nd array is 'bigger'
// Larger number of elements is considered as 'bigger'.
// If arrays sizes are equal the one with first bigger element
// considered to be bigger.
//
// Both arrays are expected to contain numeric elements only.
function compare_arrays(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return compare_elements(arr1.length, arr2.length);
    }

    for (let i = 0; i < arr1.length; i++) {
        let el_compararion_result = compare_elements(arr1[i], arr2[i]);
        if (el_compararion_result != 0){
            return el_compararion_result;
        }
    }

    return 0;
}

console.log(compare_arrays(array1, array2));