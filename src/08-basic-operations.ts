/**
 * Task 22: Find Maximum Value
 * 
 * Implement a function that takes an array of numbers and returns
 * the maximum value.
 * 
 * Example:
 * Input: [1, 5, 3, 9, 2]
 * Output: 9
 */
export function findMaximum(numbers: number[]): number {
    // let max = -Infinity;
    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] > max) {
    //         max = numbers[i];
    //     }
    // }
    // return max;

    return Math.max(...numbers);
}

/**
 * Task 23: Check if Array Contains Value
 * 
 * Implement a function that takes an array and a value, and returns
 * true if the value exists in the array.
 * 
 * Example:
 * Input: [1, 2, 3, 4], 3
 * Output: true
 */
export function arrayContainsValue<T>(array: T[], value: T): boolean {
    return array.includes(value);
}

/**
 * Task 24: Remove Duplicates
 * 
 * Implement a function that takes an array and returns a new array
 * with duplicate values removed.
 * 
 * Example:
 * Input: [1, 2, 2, 3, 3, 4]
 * Output: [1, 2, 3, 4]
 */
export function removeDuplicates<T>(array: T[]): T[] {
    return array.filter((item, index, array) => array.indexOf(item) === index);
} 