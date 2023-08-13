var DataTypes = require("sequelize").DataTypes;
var _CRMEvents = require("./CRMEvents");
var _account = require("./account");
var _card = require("./card");
var _client = require("./client");
var _clientaccount = require("./clientaccount");
var _crmcallcenterlogs = require("./crmcallcenterlogs");
var _crmreviews = require("./crmreviews");
var _disposition = require("./disposition");
var _district = require("./district");
var _loan = require("./loan");
var _order = require("./order");
var _state = require("./state");
var _transaction = require("./transaction");

function initModels(sequelize) {
  var CRMEvents = _CRMEvents(sequelize, DataTypes);
  var account = _account(sequelize, DataTypes);
  var card = _card(sequelize, DataTypes);
  var client = _client(sequelize, DataTypes);
  var clientaccount = _clientaccount(sequelize, DataTypes);
  var crmcallcenterlogs = _crmcallcenterlogs(sequelize, DataTypes);
  var crmreviews = _crmreviews(sequelize, DataTypes);
  var disposition = _disposition(sequelize, DataTypes);
  var district = _district(sequelize, DataTypes);
  var loan = _loan(sequelize, DataTypes);
  var order = _order(sequelize, DataTypes);
  var state = _state(sequelize, DataTypes);
  var transaction = _transaction(sequelize, DataTypes);

  crmcallcenterlogs.belongsTo(CRMEvents, { as: "Complaint ", foreignKey: "Complaint ID"});
  CRMEvents.hasMany(crmcallcenterlogs, { as: "crmcallcenterlogs", foreignKey: "Complaint ID"});
  loan.belongsTo(account, { as: "account", foreignKey: "account_id"});
  account.hasMany(loan, { as: "loans", foreignKey: "account_id"});
  order.belongsTo(account, { as: "account", foreignKey: "account_id"});
  account.hasMany(order, { as: "orders", foreignKey: "account_id"});
  transaction.belongsTo(account, { as: "account", foreignKey: "account_id"});
  account.hasMany(transaction, { as: "transactions", foreignKey: "account_id"});
  CRMEvents.belongsTo(client, { as: "Client", foreignKey: "Client_ID"});
  client.hasMany(CRMEvents, { as: "CRMEvents", foreignKey: "Client_ID"});
  disposition.belongsTo(clientaccount, { as: "client", foreignKey: "client_id"});
  clientaccount.hasMany(disposition, { as: "dispositions", foreignKey: "client_id"});
  card.belongsTo(disposition, { as: "disp", foreignKey: "disp_id"});
  disposition.hasMany(card, { as: "cards", foreignKey: "disp_id"});
  account.belongsTo(district, { as: "district", foreignKey: "district_id"});
  district.hasMany(account, { as: "accounts", foreignKey: "district_id"});
  client.belongsTo(district, { as: "district", foreignKey: "district_id"});
  district.hasMany(client, { as: "clients", foreignKey: "district_id"});
  crmreviews.belongsTo(district, { as: "district", foreignKey: "district_id"});
  district.hasMany(crmreviews, { as: "crmreviews", foreignKey: "district_id"});
  district.belongsTo(state, { as: "state_name_state", foreignKey: "state_name"});
  state.hasMany(district, { as: "districts", foreignKey: "state_name"});

  return {
    CRMEvents,
    account,
    card,
    client,
    clientaccount,
    crmcallcenterlogs,
    crmreviews,
    disposition,
    district,
    loan,
    order,
    state,
    transaction,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
