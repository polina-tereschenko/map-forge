/**
 * Task 7: Flatten Nested Arrays
 * 
 * Implement a function that takes an array of arrays and returns a flattened array.
 * 
 * Example:
 * Input: [[1, 2], [3, 4], [5, 6]]
 * Output: [1, 2, 3, 4, 5, 6]
 */
export function flattenArrays(arrays: number[][]): number[] {
    // TODO: Implement this function
    return [];
}

/**
 * Task 8: Extract Nested Object Values
 * 
 * Implement a function that takes an object with nested objects and returns
 * an array of all values from all levels.
 * 
 * Example:
 * Input: { a: 1, b: { c: 2, d: 3 }, e: 4 }
 * Output: [1, 2, 3, 4]
 */
export function extractNestedValues(obj: Record<string, any>): any[] {
    // TODO: Implement this function
    return [];
}

/**
 * Task 9: Group Array by Property
 * 
 * Implement a function that takes an array of objects and groups them by
 * a specified property.
 * 
 * Example:
 * Input: [
 *   { id: 1, category: 'A' },
 *   { id: 2, category: 'B' },
 *   { id: 3, category: 'A' }
 * ], 'category'
 * Output: {
 *   'A': [{ id: 1, category: 'A' }, { id: 3, category: 'A' }],
 *   'B': [{ id: 2, category: 'B' }]
 * }
 */
export function groupByProperty<T extends Record<string, any>>(
    items: T[],
    property: keyof T
): Record<string, T[]> {
    // TODO: Implement this function
    return {};
} 