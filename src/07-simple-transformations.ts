/**
 * Task 19: Convert Array to String
 * 
 * Implement a function that takes an array of strings and joins them
 * with a specified separator.
 * 
 * Example:
 * Input: ['apple', 'banana', 'cherry'], '-'
 * Output: 'apple-banana-cherry'
 */
export function joinArrayToString(strings: string[], separator: string): string {
    // let result = strings[0];
    // if (strings.length === 0) return '';

    // for (let i = 1; i < strings.length; i++) {
    //     result += separator + strings[i];
    // }

    // return result;

    return strings.join(separator);
}

/**
 * Task 20: Split String to Array
 * 
 * Implement a function that takes a string and splits it into an array
 * based on a specified separator.
 * 
 * Example:
 * Input: 'apple-banana-cherry', '-'
 * Output: ['apple', 'banana', 'cherry']
 */
export function splitStringToArray(str: string, separator: string): string[] {
    return str.split(separator);
}

/**
 * Task 21: Reverse Array
 * 
 * Implement a function that takes an array and returns a new array
 * with elements in reverse order.
 * 
 * Example:
 * Input: [1, 2, 3, 4]
 * Output: [4, 3, 2, 1]
 */
export function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
} 