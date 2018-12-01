const helpers = require('../helpers');

module.exports = {
  part_1() {
    const data = helpers.read.readDataAsList(1, 1);
    return data.reduce((a, b) => a + b, 0);
  }
};