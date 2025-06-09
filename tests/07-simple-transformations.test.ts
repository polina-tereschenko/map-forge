import {
    joinArrayToString,
    splitStringToArray,
    reverseArray
} from '../src/07-simple-transformations';

describe('Simple Transformations', () => {
    describe('joinArrayToString', () => {
        it('should join array elements with separator', () => {
            expect(joinArrayToString(['apple', 'banana', 'cherry'], '-')).toBe('apple-banana-cherry');
            expect(joinArrayToString(['a', 'b'], '')).toBe('ab');
            expect(joinArrayToString([], '-')).toBe('');
        });
    });

    describe('splitStringToArray', () => {
        it('should split string into array using separator', () => {
            expect(splitStringToArray('apple-banana-cherry', '-')).toEqual(['apple', 'banana', 'cherry']);
            expect(splitStringToArray('a,b', ',')).toEqual(['a', 'b']);
            expect(splitStringToArray('', '-')).toEqual(['']);
        });
    });

    describe('reverseArray', () => {
        it('should reverse array elements', () => {
            expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
            expect(reverseArray(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
            expect(reverseArray([])).toEqual([]);
        });
    });
}); 