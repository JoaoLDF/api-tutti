'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      name:{
        type: Sequelize.STRING,
        allowNull:false
      },
      email:{
        type: Sequelize.STRING,
        allowNull:false
      },
      password:{
        type: Sequelize.STRING,
        allowNull:false
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false
      }
    },{
      freezeTableName:true,
      timestamps:true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user');
  }
};