'use strict';

// address-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const address = sequelize.define('address', {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });

  address.sync();

  return address;
};
