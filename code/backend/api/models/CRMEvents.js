const db = require("./index");

module.exports = (sequelize, Sequelize) => {
    return sequelize.define('CRMEvents', {
        'Date received': {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        Product: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        'Sub-product': {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        Issue: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        'Sub-issue': {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        'Consumer complaint narrative': {
            type: Sequelize.STRING(20000),
            allowNull: true
        },
        Tags: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        'Consumer consent provided?': {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        'Submitted via': {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        'Date sent to company': {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        'Company response to consumer': {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        'Timely response?': {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        'Consumer disputed?': {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        'Complaint ID': {
            type: Sequelize.STRING(50),
            allowNull: false,
            primaryKey: true
        },
        Client_ID: {
            type: Sequelize.STRING(50),
            allowNull: true,
        },
        createdAt: { type: Sequelize.DATE, allowNull: true, defaultValue: Sequelize.NOW },
        updatedAt: { type: Sequelize.DATE, allowNull: true, defaultValue: Sequelize.NOW },
    });
};
