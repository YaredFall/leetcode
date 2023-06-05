/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    let pre = 1;
    let post = 1;

    return nums.reduce((acc, val, i) => {
        acc[i] *= pre;
        pre *= nums[i];
        acc[nums.length - 1 - i] *= post;
        post *= nums[nums.length - 1 - i];
        
        return acc;
    }, new Array(nums.length).fill(1))
};

module.exports = productExceptSelf