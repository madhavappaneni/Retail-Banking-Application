var DataTypes = require("sequelize").DataTypes;
var _crmevents = require("./crmevents");

function initModels(sequelize) {
  var crmevents = _crmevents(sequelize, DataTypes);

  crmevents.belongsTo(client, { as: "Client", foreignKey: "Client_ID"});
  client.hasMany(crmevents, { as: "crmevents", foreignKey: "Client_ID"});

  return {
    crmevents,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
