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
    const result: Record<string, R> = {};
    for (const [key, value] of Object.entries(obj)) {
        result[key] = transform(value);
    }
    return result;
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
    const result: Record<string, T> = {};
    for (const [key, value] of Object.entries(obj)) {
        if (predicate(value) === true) {
            result[key] = value;
        }
    }
    return result;
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
    const result = {} as Record<K, V>;
    for (const item of array){
        const key = keySelector(item);
        result[key]  = valueSelector(item);
    }
    return result;
} 