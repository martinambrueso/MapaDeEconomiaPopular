module.exports = (sequelize, DataTypes) => {
  const Entity = sequelize.define('entities', {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      nombre: { type: DataTypes.STRING, allowNull: false },
      tipo_unidad: { type: DataTypes.STRING, allowNull: false },
      sub_unidad: { type: DataTypes.STRING, allowNull: false },
      nombre_antigua_firma: { type: DataTypes.STRING, allowNull: false },
      fecha_recuperacion: { type: DataTypes.DATE, allowNull: false },
      bienes_servicios: { type: DataTypes.STRING, allowNull: false },
      forma_juridica: { type: DataTypes.DATE, allowNull: false },
      fecha_inicio: { type: DataTypes.DATE, allowNull: false },
      calle: { type: DataTypes.STRING, allowNull: false },
      numero: { type: DataTypes.STRING, allowNull: false },
      entre_calle1: { type: DataTypes.STRING, allowNull: false },
      entre_calle2: { type: DataTypes.STRING, allowNull: false },
      barrio: { type: DataTypes.STRING, allowNull: false },
  });

  Entity.associate = models => {
    Entity.belongsTo(models.categories, {
      as: 'rubro',
      foreignKey: 'categoryId'
    });
    Entity.belongsTo(models.subcategories, {
      as: 'sub_rubro',
      foreignKey: 'subcategoryId'
    });
    Entity.belongsTo(models.businessAreas, {
      as: 'rama',
      foreignKey: 'businessAreaId'
    });
  };
  return Entity;
};
