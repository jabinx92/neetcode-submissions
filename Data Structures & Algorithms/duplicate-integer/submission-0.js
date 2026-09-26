class Solution {

    hasDuplicate(nums) {

        //edge case
        if (nums.length === 0 || nums.length === 1) {
            return false;
        }

        //make an object
        const map = new Set();

        //iterate with while thru object
        let i = 0;
        while (i < nums.length) {

            //if letter is found in hash map, return true
            if (map.has(nums[i])) {
                return true;
            } else {
                //else add to hash map
                map.add(nums[i]);
                i++;
            }
        }

        return false;
    };
}
