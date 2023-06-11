const isAnagram = require('./242');

describe('242. Valid Anagram', () => {
    test('case 1', () => {
        expect(isAnagram("anagram", "nagaram")).toBe(true);
    })
    
    test('case 2', () => {
        expect(isAnagram("rat", "car")).toBe(false);
    })
});