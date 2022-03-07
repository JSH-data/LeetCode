/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = new Array(n+1).fill(0)
    dp[0] = 1
    
    for(let i = 0; i <= n; i++) {
        for(let j=0; j < i; j++) {
            if(j + 1 == i || j + 2 == i) {
                dp[i] += dp[j] 
            }
        }
    }
    return dp[n]
};