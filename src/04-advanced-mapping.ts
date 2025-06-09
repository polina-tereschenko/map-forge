/**
 * Task 10: Map Object Values
 * 
 * Implement a function that takes an object and a transformation function,
 * and returns a new object with the same keys but transformed values.
 * 
 * Example:
 * Input: { a: 1, b: 2, c: 3 }, (x) => x * 2
 * Output: { a: 2, b: 4, c: 6 }
 */
export function mapObjectValues<T, R>(
    obj: Record<string, T>,
    transform: (value: T) => R
): Record<string, R> {
    // TODO: Implement this function
    return {};
}

/**
 * Task 11: Filter Object Properties
 * 
 * Implement a function that takes an object and a predicate function,
 * and returns a new object containing only the properties that satisfy
 * the predicate.
 * 
 * Example:
 * Input: { a: 1, b: 2, c: 3 }, (value) => value > 1
 * Output: { b: 2, c: 3 }
 */
export function filterObjectProperties<T>(
    obj: Record<string, T>,
    predicate: (value: T) => boolean
): Record<string, T> {
    // TODO: Implement this function
    return {};
}

/**
 * Task 12: Transform Array to Object
 * 
 * Implement a function that takes an array of objects and transforms it
 * into an object using specified key and value selectors.
 * 
 * Example:
 * Input: [
 *   { id: 1, name: 'John' },
 *   { id: 2, name: 'Jane' }
 * ],
 * (item) => item.id,
 * (item) => item.name
 * Output: { '1': 'John', '2': 'Jane' }
 */
export function arrayToObject<T, K extends string | number, V>(
    array: T[],
    keySelector: (item: T) => K,
    valueSelector: (item: T) => V
): Record<K, V> {
    // TODO: Implement this function
    return {} as Record<K, V>;
} 