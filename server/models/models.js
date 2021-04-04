const {DataTypes} = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
});

const Slot = sequelize.define('slot', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.STRING, unique: true},
});

User.hasMany(Slot);
Slot.belongsTo(User);

module.exports = {
    User, Slot,
};
