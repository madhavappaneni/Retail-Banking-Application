const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('card', {
    card_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    disp_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'disposition',
        key: 'disp_id'
      }
    },
    type: {
      type: DataTypes.ENUM("VISA Signature","VISA Standard","VISA Infinite"),
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'card',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "card_pkey",
        unique: true,
        fields: [
          { name: "card_id" },
        ]
      },
    ]
  });
};
