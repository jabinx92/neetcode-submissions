class Solution {
    
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        };

    let sStorage = {};
    let tStorage = {};

        for(var i = 0; i < s.length; i++) {
            sStorage[s[i]] = (sStorage[s[i]] || 0) + 1
            tStorage[t[i]] = (tStorage[t[i]] || 0) + 1 
        }

        for(let key in sStorage) {
            if(sStorage[key] !== tStorage[key]) {
                return false
            }
        }
        return true

    }

}