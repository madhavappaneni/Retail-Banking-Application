const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client', {
    client_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fulldate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    social: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first: {
      type: DataTypes.STRING,
      allowNull: false
    },
    middle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address_2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'district',
        key: 'district_id'
      }
    }
  }, {
    sequelize,
    tableName: 'client',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "client_pkey",
        unique: true,
        fields: [
          { name: "client_id" },
        ]
      },
    ]
  });
};
