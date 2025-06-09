import {
    findMaximum,
    arrayContainsValue,
    removeDuplicates
} from '../src/08-basic-operations';

describe('Basic Operations', () => {
    describe('findMaximum', () => {
        it('should find the maximum value in an array', () => {
            expect(findMaximum([1, 5, 3, 9, 2])).toBe(9);
            expect(findMaximum([-1, -5, -3])).toBe(-1);
            expect(findMaximum([1])).toBe(1);
        });
    });

    describe('arrayContainsValue', () => {
        it('should check if array contains a value', () => {
            expect(arrayContainsValue([1, 2, 3, 4], 3)).toBe(true);
            expect(arrayContainsValue([1, 2, 3, 4], 5)).toBe(false);
            expect(arrayContainsValue(['a', 'b', 'c'], 'b')).toBe(true);
            expect(arrayContainsValue([], 1)).toBe(false);
        });
    });

    describe('removeDuplicates', () => {
        it('should remove duplicate values from array', () => {
            expect(removeDuplicates([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
            expect(removeDuplicates(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
            expect(removeDuplicates([])).toEqual([]);
        });
    });
}); 