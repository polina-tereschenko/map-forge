/**
 * Task 25: Convert to Title Case
 * 
 * Implement a function that takes a string and converts it to title case
 * (first letter of each word capitalized).
 * 
 * Example:
 * Input: 'hello world'
 * Output: 'Hello World'
 */
export function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (word) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
}

/**
 * Task 26: Count Words
 * 
 * Implement a function that takes a string and returns the number of words
 * (words are separated by spaces).
 * 
 * Example:
 * Input: 'hello world'
 * Output: 2
 */
export function countWords(str: string): number {
    return str.split(' ')
        .filter(function (n) { return n != '' })
        .length;
}

/**
 * Task 27: Truncate String
 * 
 * Implement a function that takes a string and a maximum length,
 * and returns the string truncated to that length with '...' appended
 * if the string was longer.
 * 
 * Example:
 * Input: 'hello world', 5
 * Output: 'hello...'
 */
export function truncateString(str: string, maxLength: number): string {
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength) + '...';
} 