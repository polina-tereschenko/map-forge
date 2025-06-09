import {
    sortNumbers,
    sortByLength,
    sortByProperty
} from '../src/10-array-sorting';

describe('Array Sorting', () => {
    describe('sortNumbers', () => {
        it('should sort numbers in ascending order', () => {
            expect(sortNumbers([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
            expect(sortNumbers([-1, -5, 3])).toEqual([-5, -1, 3]);
            expect(sortNumbers([])).toEqual([]);
        });
    });

    describe('sortByLength', () => {
        it('should sort strings by length', () => {
            expect(sortByLength(['a', 'ccc', 'bb'])).toEqual(['a', 'bb', 'ccc']);
            expect(sortByLength([''])).toEqual(['']);
            expect(sortByLength([])).toEqual([]);
        });
    });

    describe('sortByProperty', () => {
        it('should sort objects by specified property', () => {
            const input = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 }
            ];

            expect(sortByProperty(input, 'age')).toEqual([
                { name: 'Jane', age: 25 },
                { name: 'John', age: 30 }
            ]);

            expect(sortByProperty(input, 'name')).toEqual([
                { name: 'Jane', age: 25 },
                { name: 'John', age: 30 }
            ]);

            expect(sortByProperty([], 'age')).toEqual([]);
        });
    });
}); 