/**
 * Task 1: Double Array Elements
 * 
 * Implement a function that takes an array of numbers and returns a new array
 * where each element is doubled.
 * 
 * Example:
 * Input: [1, 2, 3, 4]
 * Output: [2, 4, 6, 8]
 */
export function doubleArrayElements(numbers: number[]): number[] {
    // const doubleArray: number[] = [];

    // for (const index in numbers) {
    //     doubleArray.push(numbers[index] * 2);
    // }

    // return doubleArray;

    // const doubleArray: number[]  = [];
    // for (let i = 0; i < numbers.length; i++) {
    //     doubleArray.push(numbers[i] * 2);
    // }

    // return doubleArray;

    return numbers.map(num => num * 2);
}

/**
 * Task 2: Filter Even Numbers
 * 
 * Implement a function that takes an array of numbers and returns a new array
 * containing only the even numbers.
 * 
 * Example:
 * Input: [1, 2, 3, 4, 5, 6]
 * Output: [2, 4, 6]
 */
export function filterEvenNumbers(numbers: number[]): number[] {
    // const EvenNumbers: number[] = [];
    // for (const index in numbers) {
    //     if (numbers[index] % 2 === 0) {
    //         EvenNumbers.push(numbers[index]);
    //     }
    // }

    // return EvenNumbers;

    // const EvenNumbers: number[] = [];
    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] % 2 === 0) {
    //         EvenNumbers.push(numbers[i]);
    //     }
    // }

    // return EvenNumbers;

    return numbers.filter(num => num % 2 === 0);
}

/**
 * Task 3: Sum Array Elements
 * 
 * Implement a function that takes an array of numbers and returns the sum
 * of all elements.
 * 
 * Example:
 * Input: [1, 2, 3, 4]
 * Output: 10
 */
export function sumArrayElements(numbers: number[]): number {    
    // let sumArray  = 0;
    // for (const index in numbers) {
    //     sumArray += numbers[index];
    // }

    // return sumArray;

    // let sumArray = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //     sumArray += numbers[i];
    // }

    // return sumArray;

    return numbers.reduce((i, num) => i + num, 0);
} 