/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, t) {
    for(let i=0;i<arr.length;i++){
        if(arr[i]===t){
            return i;
        }
    }
    return -1

};