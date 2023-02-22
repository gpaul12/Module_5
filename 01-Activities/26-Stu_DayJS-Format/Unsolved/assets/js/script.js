// Use Day.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
var gradDay = dayjs('Jul 13, 2023');
$('#1a').text(gradDay.format('MMM D, YYYY'));
// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
var dow = dayjs('1-1-2027');
$('#2a').text(dow.format('dddd'))
// TODO: 3. What is the current time in the format: hours:minutes:seconds
var time = dayjs().format('hh:mm:ss');
$('#3a').text(time);
// TODO: 4. What is the current Unix timestamp?

// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.

// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)

