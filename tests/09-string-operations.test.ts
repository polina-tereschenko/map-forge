import {
    toTitleCase,
    countWords,
    truncateString
} from '../src/09-string-operations';

describe('String Operations', () => {
    describe('toTitleCase', () => {
        it('should convert string to title case', () => {
            expect(toTitleCase('hello world')).toBe('Hello World');
            expect(toTitleCase('HELLO WORLD')).toBe('Hello World');
            expect(toTitleCase('')).toBe('');
        });
    });

    describe('countWords', () => {
        it('should count words in a string', () => {
            expect(countWords('hello world')).toBe(2);
            expect(countWords('hello')).toBe(1);
            expect(countWords('')).toBe(0);
            expect(countWords('  hello  world  ')).toBe(2);
        });
    });

    describe('truncateString', () => {
        it('should truncate string to specified length', () => {
            expect(truncateString('hello world', 5)).toBe('hello...');
            expect(truncateString('hello', 5)).toBe('hello');
            expect(truncateString('', 5)).toBe('');
        });
    });
}); 