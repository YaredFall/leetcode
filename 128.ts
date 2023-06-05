function longestConsecutive(nums: number[]): number {
    const set = new Set(nums);

    let maxCount = 0;

    for (let n of nums) {
        if (!set.has(n - 1)) {

            let count = 1;
            while (set.has(n + count)) {
                count++;
            }

            maxCount = Math.max(maxCount, count);
        }
    }

    return maxCount;
};

export { longestConsecutive }