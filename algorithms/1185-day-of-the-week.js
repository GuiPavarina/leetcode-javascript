const assert = require('assert');

/**
 * https://leetcode.com/problems/day-of-the-week/
 * 
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
const dayOfTheWeek = (day, month, year) => {
    
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return weekDays[new Date(year, (month - 1), day).getDay()];

};

assert.equal(dayOfTheWeek(13, 5 , 2019), "Monday");
assert.equal(dayOfTheWeek(06, 10, 2019), "Sunday");
assert.equal(dayOfTheWeek(15, 8, 1993), "Sunday");
