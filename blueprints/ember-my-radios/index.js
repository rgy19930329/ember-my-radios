/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('my-radios', '0.0.2');
  }
};
