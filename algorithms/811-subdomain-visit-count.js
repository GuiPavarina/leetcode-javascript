/**
 * 
 * https://leetcode.com/problems/subdomain-visit-count/
 * 
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const result = {};

    cpdomains.forEach((val) => {

        const visits = parseInt(val.split(' ')[0]);
        const fullDomain = val.split(' ')[1];

        const domains = getAllDomains(fullDomain);

        domains.forEach((el) => {
            result[el] = ( result[el] ? result[el] : 0 ) + visits;
        });

    });

    return buildResponse(result);

};

const buildResponse = (obj) => Object.keys(obj).map( (key) => obj[key] + " " + key );

const getAllDomains = (fullDomain) => {
    const arr = [];

    arr.push(fullDomain);

    while(fullDomain.indexOf('.') != -1) {
        fullDomain = fullDomain.slice(fullDomain.indexOf('.') + 1);
        arr.push(fullDomain);
    }

    return arr;
}


subdomainVisits(["9001 discuss.leetcode.com"]);
subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]);
