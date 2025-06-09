/**
 * Task 13: Find Unique Values with Count
 * 
 * Implement a function that takes an array of values and returns an object
 * where keys are unique values and values are their counts.
 * 
 * Example:
 * Input: ['apple', 'banana', 'apple', 'cherry', 'banana']
 * Output: { apple: 2, banana: 2, cherry: 1 }
 */
export function countUniqueValues<T extends string | number>(array: T[]): Record<T, number> {
    // TODO: Implement this function
    return {} as Record<T, number>;
}

/**
 * Task 14: Sort and Group by First Letter
 * 
 * Implement a function that takes an array of strings, sorts them alphabetically,
 * and groups them by their first letter.
 * 
 * Example:
 * Input: ['apple', 'banana', 'cherry', 'date', 'elderberry']
 * Output: {
 *   'a': ['apple'],
 *   'b': ['banana'],
 *   'c': ['cherry'],
 *   'd': ['date'],
 *   'e': ['elderberry']
 * }
 */
export function sortAndGroupByFirstLetter(strings: string[]): Record<string, string[]> {
    // TODO: Implement this function
    return {};
}

/**
 * Task 15: Find Common Elements
 * 
 * Implement a function that takes multiple arrays and returns an array
 * containing elements that appear in all input arrays.
 * 
 * Example:
 * Input: [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]
 * Output: [3, 4]
 */
export function findCommonElements<T>(...arrays: T[][]): T[] {
    // TODO: Implement this function
    return [];
} 