import {
    doubleArrayElements,
    filterEvenNumbers,
    sumArrayElements
} from '../src/01-basic-array-operations';

describe('Basic Array Operations', () => {
    describe('doubleArrayElements', () => {
        it('should double each element in the array', () => {
            expect(doubleArrayElements([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
            expect(doubleArrayElements([0, -1, 2])).toEqual([0, -2, 4]);
            expect(doubleArrayElements([])).toEqual([]);
        });
    });

    describe('filterEvenNumbers', () => {
        it('should return only even numbers', () => {
            expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
            expect(filterEvenNumbers([1, 3, 5])).toEqual([]);
            expect(filterEvenNumbers([2, 4, 6])).toEqual([2, 4, 6]);
            expect(filterEvenNumbers([])).toEqual([]);
        });
    });

    describe('sumArrayElements', () => {
        it('should return the sum of all elements', () => {
            expect(sumArrayElements([1, 2, 3, 4])).toBe(10);
            expect(sumArrayElements([-1, -2, 3])).toBe(0);
            expect(sumArrayElements([])).toBe(0);
        });
    });
}); 