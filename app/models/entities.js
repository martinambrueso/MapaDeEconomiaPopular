module.exports = (sequelize, DataTypes) => {
  const Entity = sequelize.define('entities', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    initializedAt: { type: DataTypes.DATE, allowNull: false },
    street: { type: DataTypes.STRING, allowNull: false },
    streetNumber: { type: DataTypes.STRING, allowNull: false },
    district: { type: DataTypes.STRING, allowNull: false },
    province: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false },
    locality: { type: DataTypes.STRING, allowNull: false },
    services: { type: DataTypes.STRING, allowNull: false },
    baseOrganization: { type: DataTypes.STRING, allowNull: false },
    federation: { type: DataTypes.STRING, allowNull: false },
    articulations: { type: DataTypes.STRING, allowNull: false },
    referent: { type: DataTypes.STRING, allowNull: false },
    mail: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    website: { type: DataTypes.STRING, allowNull: false }
  });

  Entity.associate = models => {
    Entity.belongsTo(models.categories, {
      as: 'category',
      foreignKey: 'categoryId'
    });
    Entity.belongsTo(models.subcategories, {
      as: 'subcategory',
      foreignKey: 'subcategoryId'
    });
    Entity.belongsTo(models.businessAreas, {
      as: 'businessArea',
      foreignKey: 'businessAreaId'
    });
  };
  return Entity;
};
