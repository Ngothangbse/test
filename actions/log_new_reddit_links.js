
let datafire = require('datafire');

module.exports = new datafire.Action({
  handler: async (input, context) => {
    if (!input) return;
    console.log('New item: ' + input.title);
    console.log(input.link);
  },
});
