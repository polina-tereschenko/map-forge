/**
 * Task 28: Sort Numbers
 * 
 * Implement a function that takes an array of numbers and returns
 * a new array sorted in ascending order.
 * 
 * Example:
 * Input: [3, 1, 4, 1, 5]
 * Output: [1, 1, 3, 4, 5]
 */
export function sortNumbers(numbers: number[]): number[] {
    // TODO: Implement this function
    return [];
}

/**
 * Task 29: Sort Strings by Length
 * 
 * Implement a function that takes an array of strings and returns
 * a new array sorted by string length (shortest to longest).
 * 
 * Example:
 * Input: ['a', 'ccc', 'bb']
 * Output: ['a', 'bb', 'ccc']
 */
export function sortByLength(strings: string[]): string[] {
    // TODO: Implement this function
    return [];
}

/**
 * Task 30: Sort Objects by Property
 * 
 * Implement a function that takes an array of objects and a property name,
 * and returns a new array sorted by that property.
 * 
 * Example:
 * Input: [
 *   { name: 'John', age: 30 },
 *   { name: 'Jane', age: 25 }
 * ], 'age'
 * Output: [
 *   { name: 'Jane', age: 25 },
 *   { name: 'John', age: 30 }
 * ]
 */
export function sortByProperty<T extends Record<string, any>>(
    objects: T[],
    property: keyof T
): T[] {
    // TODO: Implement this function
    return [];
} 