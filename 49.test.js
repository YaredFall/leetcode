const groupAnagrams = require("./49")

describe("49. Group Anagrams", () => {
    test('case 1', () => {
        for (let group of [["bat"],["nat","tan"],["ate","eat","tea"]]) {
            console.log(group)
            expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"]).map(g => g.sort())).toContainEqual(group);
        }
    });
    test('case 2', () => {
        expect(groupAnagrams([""])).toEqual([[""]]);
    });
    test('case 3', () => {
        expect(groupAnagrams(["a"])).toEqual([["a"]]);
        
    });
})