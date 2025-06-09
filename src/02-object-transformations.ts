/**
 * Task 4: Object Keys to Array
 * 
 * Implement a function that takes an object and returns an array of its keys.
 * 
 * Example:
 * Input: { name: 'John', age: 30, city: 'New York' }
 * Output: ['name', 'age', 'city']
 */
export function objectKeysToArray(obj: Record<string, any>): string[] {
    // const keys: string[] = [];
    // for (const key in obj){
    //     keys.push(key);
    // }
    // return keys;

    return Object.keys(obj);
}

/**
 * Task 5: Object Values to Array
 * 
 * Implement a function that takes an object and returns an array of its values.
 * 
 * Example:
 * Input: { name: 'John', age: 30, city: 'New York' }
 * Output: ['John', 30, 'New York']
 */
export function objectValuesToArray(obj: Record<string, any>): any[] {
    // const values: any[] = [];

    // for (const key in obj) {
    //         values.push(obj[key]);
    //     }
    // return values;

    return Object.values(obj);
}

/**
 * Task 6: Object Entries to Array
 * 
 * Implement a function that takes an object and returns an array of [key, value] pairs.
 * 
 * Example:
 * Input: { name: 'John', age: 30, city: 'New York' }
 * Output: [['name', 'John'], ['age', 30], ['city', 'New York']]
 */
export function objectEntriesToArray(obj: Record<string, any>): [string, any][] {
    // const objectEntries: [string, any][] = [];

    // for (const key in obj) {
    //     objectEntries.push([key, obj[key]]);
    // }
    // return objectEntries;

    return Object.entries(obj);
} 