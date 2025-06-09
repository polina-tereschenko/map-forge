import {
    countUniqueValues,
    sortAndGroupByFirstLetter,
    findCommonElements
} from '../src/05-array-method-combinations';

describe('Array Method Combinations', () => {
    describe('countUniqueValues', () => {
        it('should count occurrences of unique values', () => {
            const input = ['apple', 'banana', 'apple', 'cherry', 'banana'];
            expect(countUniqueValues(input)).toEqual({
                apple: 2,
                banana: 2,
                cherry: 1
            });

            const numbers = [1, 2, 2, 3, 3, 3];
            expect(countUniqueValues(numbers)).toEqual({
                1: 1,
                2: 2,
                3: 3
            });

            expect(countUniqueValues([])).toEqual({});
        });
    });

    describe('sortAndGroupByFirstLetter', () => {
        it('should sort and group strings by first letter', () => {
            const input = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
            expect(sortAndGroupByFirstLetter(input)).toEqual({
                'a': ['apple'],
                'b': ['banana'],
                'c': ['cherry'],
                'd': ['date'],
                'e': ['elderberry']
            });

            const mixedCase = ['Apple', 'banana', 'Cherry', 'date'];
            expect(sortAndGroupByFirstLetter(mixedCase)).toEqual({
                'A': ['Apple'],
                'b': ['banana'],
                'C': ['Cherry'],
                'd': ['date']
            });

            expect(sortAndGroupByFirstLetter([])).toEqual({});
        });
    });

    describe('findCommonElements', () => {
        it('should find elements common to all arrays', () => {
            const array1 = [1, 2, 3, 4];
            const array2 = [2, 3, 4, 5];
            const array3 = [3, 4, 5, 6];

            expect(findCommonElements(array1, array2, array3)).toEqual([3, 4]);
            expect(findCommonElements([1, 2], [2, 3], [3, 4])).toEqual([]);
            expect(findCommonElements([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
            expect(findCommonElements([])).toEqual([]);
        });
    });
}); 