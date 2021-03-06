module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'categories',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      descripcion: { type: DataTypes.STRING, allowNull: false }
    },
    { timestamps: false }
  );

  return Category;
};
