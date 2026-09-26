class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        //edgecases

        //split sort join S
        let sString = s.split('').sort().join()
        console.log(s)
        //split sort join T
        let tString = t.split('').sort().join()
        console.log(t)



        //conditional if equal return true
        if(sString === tString) {
            return true
        }

        //else return false
        return false
    }
}
