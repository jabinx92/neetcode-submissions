class Solution {
    isPalindrome(s) {
        let lowerCaseSplitter = s.toLowerCase().split("");
        let emptyString = "";

        for (let value of lowerCaseSplitter) {
            if (
                (value >= "a" && value <= "z") ||
                (value >= "0" && value <= "9")
            ) {
                emptyString += value;
            }
        }

        return emptyString === emptyString.split("").reverse().join("");
    }
}