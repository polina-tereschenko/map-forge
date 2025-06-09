import {
    flattenArrays,
    extractNestedValues,
    groupByProperty
} from '../src/03-complex-data-structures';

describe('Complex Data Structures', () => {
    describe('flattenArrays', () => {
        it('should flatten an array of arrays', () => {
            expect(flattenArrays([[1, 2], [3, 4], [5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
            expect(flattenArrays([[1], [2], [3]])).toEqual([1, 2, 3]);
            expect(flattenArrays([])).toEqual([]);
        });
    });

    describe('extractNestedValues', () => {
        it('should extract all values from nested objects', () => {
            const input = {
                a: 1,
                b: { c: 2, d: 3 },
                e: 4
            };
            expect(extractNestedValues(input)).toEqual([1, 2, 3, 4]);

            const deepNested = {
                a: 1,
                b: {
                    c: 2,
                    d: {
                        e: 3,
                        f: 4
                    }
                }
            };
            expect(extractNestedValues(deepNested)).toEqual([1, 2, 3, 4]);
            expect(extractNestedValues({})).toEqual([]);
        });
    });

    describe('groupByProperty', () => {
        it('should group objects by specified property', () => {
            const input = [
                { id: 1, category: 'A' },
                { id: 2, category: 'B' },
                { id: 3, category: 'A' }
            ];

            const expected = {
                'A': [
                    { id: 1, category: 'A' },
                    { id: 3, category: 'A' }
                ],
                'B': [
                    { id: 2, category: 'B' }
                ]
            };

            expect(groupByProperty(input, 'category')).toEqual(expected);
            expect(groupByProperty([], 'category')).toEqual({});
        });
    });
}); 