const categories = require('../seeds/categories');
const subcategories = require('../seeds/subcategories');
const businessAreas = require('../seeds/businessAreas');

// const Category = require('../../app/models').categories;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      user: { type: Sequelize.STRING, allowNull: false },
      pass: { type: Sequelize.STRING, allowNull: false },
      admin: { type: Sequelize.BOOLEAN, allowNull: false },
      createdAt: {type: Sequelize.DATE},
      updatedAt: {type: Sequelize.DATE}
    });
    await queryInterface.createTable('categories', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false }
    });
    await queryInterface.createTable('subcategories', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'categories',
          key: 'id'
        }
      }
    });
    await queryInterface.createTable('businessAreas', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false }
    });
    await queryInterface.createTable('entities', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      initializedAt: { type: Sequelize.DATE, allowNull: false },
      street: { type: Sequelize.STRING, allowNull: false },
      streetNumber: { type: Sequelize.STRING, allowNull: false },
      district: { type: Sequelize.STRING, allowNull: false },
      province: { type: Sequelize.STRING, allowNull: false },
      country: { type: Sequelize.STRING, allowNull: false },
      locality: { type: Sequelize.STRING, allowNull: false },
      services: { type: Sequelize.STRING, allowNull: false },
      baseOrganization: { type: Sequelize.STRING, allowNull: false },
      federation: { type: Sequelize.STRING, allowNull: false },
      articulations: { type: Sequelize.STRING, allowNull: false },
      referent: { type: Sequelize.STRING, allowNull: false },
      mail: { type: Sequelize.STRING, allowNull: false },
      phone: { type: Sequelize.STRING, allowNull: false },
      website: { type: Sequelize.STRING, allowNull: false },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      subcategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'subcategories',
          key: 'id'
        }
      },
      businessAreaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'businessAreas',
          key: 'id'
        }
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      deletedAt: { type: Sequelize.DATE }
    });

    await queryInterface.bulkInsert('categories', categories);
    await queryInterface.bulkInsert('subcategories', subcategories);
    await queryInterface.bulkInsert('businessAreas', businessAreas);
  },

  down: async queryInterface => {
    await queryInterface.dropTable('entities');
    await queryInterface.dropTable('businessArea');
    await queryInterface.dropTable('subcategories');
    await queryInterface.dropTable('categories');
    await queryInterface.dropTable('users');
  }
};
