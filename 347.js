/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();

    for (let n of nums) {
        const currentCount = map.get(n);
        map.set(n, (currentCount ?? 0) + 1);
    }

    return [...map.keys()].sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
}

module.exports = topKFrequent