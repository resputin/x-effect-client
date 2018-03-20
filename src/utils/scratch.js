const moment = require('moment');

let now = moment();
let tomorrow = moment().add(1, 'day').valueOf()

console.log(tomorrow,  now)


