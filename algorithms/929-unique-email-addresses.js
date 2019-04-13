/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {

    const result = [];
    emails.forEach( (email) => {
        const splittedEmail = email.split('@');
        const formattedEmail = splittedEmail[0].split('+')[0].replace(/\./g, '') + '@' + splittedEmail[1];
        if (result.indexOf(formattedEmail) === -1)
            result.push(formattedEmail);
    });

    return result.length;
};

numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]);
numUniqueEmails(["test+aa+aa@gmail.com"]);

