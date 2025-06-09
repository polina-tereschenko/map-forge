import {
    objectKeysToArray,
    objectValuesToArray,
    objectEntriesToArray
} from '../src/02-object-transformations';

describe('Object Transformations', () => {
    const testObject = {
        name: 'John',
        age: 30,
        city: 'New York'
    };

    describe('objectKeysToArray', () => {
        it('should return an array of object keys', () => {
            expect(objectKeysToArray(testObject)).toEqual(['name', 'age', 'city']);
            expect(objectKeysToArray({})).toEqual([]);
        });
    });

    describe('objectValuesToArray', () => {
        it('should return an array of object values', () => {
            expect(objectValuesToArray(testObject)).toEqual(['John', 30, 'New York']);
            expect(objectValuesToArray({})).toEqual([]);
        });
    });

    describe('objectEntriesToArray', () => {
        it('should return an array of [key, value] pairs', () => {
            expect(objectEntriesToArray(testObject)).toEqual([
                ['name', 'John'],
                ['age', 30],
                ['city', 'New York']
            ]);
            expect(objectEntriesToArray({})).toEqual([]);
        });
    });
}); 