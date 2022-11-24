var DataTypes = require("sequelize").DataTypes;
var _account = require("./account");
var _card = require("./card");
var _client = require("./client");
var _crmcallcenterlogs = require("./crmcallcenterlogs");
var _crmevents = require("./crmevents");
var _crmreviews = require("./crmreviews");
var _disposition = require("./disposition");
var _district = require("./district");
var _loan = require("./loan");
var _order = require("./order");
var _transaction = require("./transaction");

function initModels(sequelize) {
  var account = _account(sequelize, DataTypes);
  var card = _card(sequelize, DataTypes);
  var client = _client(sequelize, DataTypes);
  var crmcallcenterlogs = _crmcallcenterlogs(sequelize, DataTypes);
  var crmevents = _crmevents(sequelize, DataTypes);
  var crmreviews = _crmreviews(sequelize, DataTypes);
  var disposition = _disposition(sequelize, DataTypes);
  var district = _district(sequelize, DataTypes);
  var loan = _loan(sequelize, DataTypes);
  var order = _order(sequelize, DataTypes);
  var transaction = _transaction(sequelize, DataTypes);

  disposition.belongsTo(account, { as: "account", foreignKey: "account_id"});
  account.hasMany(disposition, { as: "dispositions", foreignKey: "account_id"});
  loan.belongsTo(account, { as: "account", foreignKey: "account_id"});
  account.hasMany(loan, { as: "loans", foreignKey: "account_id"});
  order.belongsTo(account, { as: "account", foreignKey: "account_id"});
  account.hasMany(order, { as: "orders", foreignKey: "account_id"});
  transaction.belongsTo(account, { as: "account", foreignKey: "account_id"});
  account.hasMany(transaction, { as: "transactions", foreignKey: "account_id"});
  crmevents.belongsTo(client, { as: "Client", foreignKey: "Client_ID"});
  client.hasMany(crmevents, { as: "crmevents", foreignKey: "Client_ID"});
  disposition.belongsTo(client, { as: "client", foreignKey: "client_id"});
  client.hasMany(disposition, { as: "dispositions", foreignKey: "client_id"});
  crmcallcenterlogs.belongsTo(crmevents, { as: "Complaint ", foreignKey: "Complaint ID"});
  crmevents.hasMany(crmcallcenterlogs, { as: "crmcallcenterlogs", foreignKey: "Complaint ID"});
  card.belongsTo(disposition, { as: "disp", foreignKey: "disp_id"});
  disposition.hasMany(card, { as: "cards", foreignKey: "disp_id"});
  account.belongsTo(district, { as: "district", foreignKey: "district_id"});
  district.hasMany(account, { as: "accounts", foreignKey: "district_id"});
  client.belongsTo(district, { as: "district", foreignKey: "district_id"});
  district.hasMany(client, { as: "clients", foreignKey: "district_id"});

  return {
    account,
    card,
    client,
    crmcallcenterlogs,
    crmevents,
    crmreviews,
    disposition,
    district,
    loan,
    order,
    transaction,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
