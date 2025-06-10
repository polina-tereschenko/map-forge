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
    // const flattenArrays: number[] = [];
    // for (const i of arrays) {
    //     for (const j of i){
    //         flattenArrays.push(j);
    //     }
    // }
    // return flattenArrays;

    // const flattenArrays: number[] = [];
    // for (const i in arrays) {
    //     for (const j in arrays[i]) {
    //         flattenArrays.push(arrays[i][j]);
    //     }
    // }
    // return flattenArrays;

    // const flattenArrays: number[] = [];

    // for (let i = 0; i < arrays.length; i++) {
    //     const innerArray = arrays[i];
    //     console.log(innerArray);
    //     for (let j = 0; j < innerArray.length; j++) {
    //         flattenArrays.push(innerArray[j]);
    //         console.log(innerArray[j]);
    //     }
    // }
    // return flattenArrays;

    return arrays.flat();
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
    const result: any[] = [];

    for (const key in obj) {
        const value = obj[key];
        if (typeof value === 'object') {
            result.push(...extractNestedValues(value));
        } else {
            result.push(value);
        }
    }
    return result;
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
    const result: Record<string, T[]> = {};
    for (const item of items){
        const objkey = item[property];
        if (!(objkey in result)) {
            result[objkey] = [];
        }
        result[objkey].push(item);
    }
    return result;
}