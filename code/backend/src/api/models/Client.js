const db = require("./index");

module.exports = (sequelize, Sequelize) => {
    return sequelize.define('client', {
        client_id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        sex: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fulldate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        social: {
            type: Sequelize.STRING,
            allowNull: false
        },
        first: {
            type: Sequelize.STRING,
            allowNull: false
        },
        middle: {
            type: Sequelize.STRING,
            allowNull: true
        },
        last: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address_1: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address_2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false
        },
        zipcode: {
            type: Sequelize.STRING,
            allowNull: false
        },
        district_id: {
            type: Sequelize.INTEGER,
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
