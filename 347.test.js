const topKFrequent = require("./347");

describe(("347. Top K Frequent Elements"), () => {
    test('case 1', () => {
        expect(topKFrequent([1,1,1,2,2,3], 2).sort()).toEqual([1,2]);
    });
    test('case 2', () => {
        expect(topKFrequent([1], 1)).toEqual([1]);
    });
})