/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0]
    let previos = nums[0]
    
    for(let i=1; i < nums.length; i++) {
        const crt = nums[i];
        
        previos = Math.max(previos + crt, crt);
        
        max = Math.max(previos, max);
    }
    return max
};