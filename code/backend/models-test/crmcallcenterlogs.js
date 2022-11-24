const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crmcallcenterlogs', {
    'Date received': {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    'Complaint ID': {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'crmevents',
        key: 'Complaint ID'
      }
    },
    'rand client': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phonefinal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'vru+line': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    call_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    outcome: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    server: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ser_start: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ser_exit: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ser_time: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'crmcallcenterlogs',
    schema: 'test',
    timestamps: false
  });
};
