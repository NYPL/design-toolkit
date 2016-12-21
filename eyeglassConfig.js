var designToolkit = require('./index');

module.exports = function(eyeglass, sass) {
  return {
    sassDir: designToolkit.includePaths[0]
  };
};
