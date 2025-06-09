import {
    mapObjectValues,
    filterObjectProperties,
    arrayToObject
} from '../src/04-advanced-mapping';

describe('Advanced Mapping', () => {
    describe('mapObjectValues', () => {
        it('should transform object values using the provided function', () => {
            const input = { a: 1, b: 2, c: 3 };
            const double = (x: number) => x * 2;
            expect(mapObjectValues(input, double)).toEqual({ a: 2, b: 4, c: 6 });

            const toString = (x: number) => x.toString();
            expect(mapObjectValues(input, toString)).toEqual({ a: '1', b: '2', c: '3' });
            expect(mapObjectValues({}, double)).toEqual({});
        });
    });

    describe('filterObjectProperties', () => {
        it('should filter object properties based on the predicate', () => {
            const input = { a: 1, b: 2, c: 3 };
            const greaterThanOne = (x: number) => x > 1;
            expect(filterObjectProperties(input, greaterThanOne)).toEqual({ b: 2, c: 3 });

            const isEven = (x: number) => x % 2 === 0;
            expect(filterObjectProperties(input, isEven)).toEqual({ b: 2 });
            expect(filterObjectProperties({}, greaterThanOne)).toEqual({});
        });
    });

    describe('arrayToObject', () => {
        it('should transform array to object using key and value selectors', () => {
            const input = [
                { id: 1, name: 'John' },
                { id: 2, name: 'Jane' }
            ];

            const expected = {
                '1': 'John',
                '2': 'Jane'
            };

            expect(arrayToObject(
                input,
                item => item.id,
                item => item.name
            )).toEqual(expected);

            const emptyArray: Array<{ id: number; name: string }> = [];
            expect(arrayToObject(
                emptyArray,
                item => item.id,
                item => item.name
            )).toEqual({});
        });
    });
}); 