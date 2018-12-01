const fs = require('fs');
const path = require('path');

module.exports = {
  readDataAsList(day, part) {
    return fs.readFileSync(
        path.join(__dirname, '..', 'data', `d_${day}_${part}.txt`)
      )
      .toString()
      .trim()
      .split('\n')
      .map(n => parseInt(n, 10));
  }
};