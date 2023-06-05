/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const processed = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const pair = target - nums[i];
        const foundPair = processed.get(pair);
        
        if (foundPair !== undefined) {
            return [foundPair, i]
        }
        processed.set(nums[i], i)
    };
    return null;
};