class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        //edgecases
        if(s.length !== t.length){
            return false
        }

        //split sort join S
        let sString = s.split('').sort().join()
        console.log(s.split(''))
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
