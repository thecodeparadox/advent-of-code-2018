const reading = require('../helpers/read_data');

module.exports.run = () => {
  const data = reading.readDataAsList(1, 1);
  return data.reduce((a, b) => a + b, 0);
};