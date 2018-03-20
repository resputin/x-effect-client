const moment = require('moment');

let now = moment().valueOf();
let tomorrow = moment().add(1, 'day').valueOf()

console.log(tomorrow,  now)


