module.exports = (sequelize, DataTypes) => {
  const Subcategory = sequelize.define(
    'subcategories',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      descripcion: { type: DataTypes.STRING, allowNull: false }
    },
    { timestamps: false }
  );

  Subcategory.associate = models => {
    Subcategory.belongsTo(models.categories, {
      as: 'category',
      foreignKey: 'categoryId'
    });
  };
  return Subcategory;
};
