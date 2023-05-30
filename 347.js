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

    return [...map].sort((kv1, kv2) => kv2[1] - kv1[1]).slice(0, k).map(kv => kv[0]);
}

module.exports = topKFrequent