const db = require("./index");

module.exports = (sequelize, Sequelize) => {
    return sequelize.define('transaction', {
        trans_id: {
            type: Sequelize.STRING(50),
            allowNull: false,
            primaryKey: true
        },
        account_id: {
            type: Sequelize.STRING(50),
            allowNull: false,
            references: {
                model: 'account',
                key: 'account_id'
            }
        },
        type: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        operation: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        amount: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        balance: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        k_symbol: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        bank: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        account: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        date: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        fulldatewithtime: {
            type: Sequelize.STRING(50),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'transaction',
        schema: 'public',
        timestamps: false,
        indexes: [
            {
                name: "idx_trans_date",
                fields: [
                    { name: "date" },
                ]
            },
            {
                name: "transaction_pkey",
                unique: true,
                fields: [
                    { name: "trans_id" },
                ]
            },
        ]
    });
};