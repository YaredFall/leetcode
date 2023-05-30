const productExceptSelf = require("./238");

describe('238. Product of Array Except Self', () => {
    test('case 1', () => {
        expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
    });
    test('case 2', () => {
        expect(productExceptSelf([-1,1,0,-3,3]).map(e => e || 0)).toEqual([0,0,9,0,0]);
    });
});