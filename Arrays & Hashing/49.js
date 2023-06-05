/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for (let s of strs) {
        const key = [...s].sort().join("");
        const value = map.get(key);
        if (value) {
            value.push(s);
        } else {
            map.set(key, [s])
        }
    }
    
    return Array.from(map.values());
};

module.exports = groupAnagrams