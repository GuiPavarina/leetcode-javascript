/**
 * https://leetcode.com/problems/find-common-characters/
 * 
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = (A) => {
    
    const firstElement = A.shift();

    const result = [...firstElement].filter( c => {

        let flag = false;
        A.forEach( (s,i) => {
            if (s.indexOf(c) === -1)
                flag = true;

            A[i] = s.replace(c, '.');
        });

        if (!flag)
            return c;

    });
    
    return result;
};


commonChars(["bella","label","roller"]);
commonChars(["cool","lock","cook"]);
commonChars(["a","b","c"]);
commonChars(["aa","aa","aa"]);
commonChars(["ab","aab","aacb"]);
