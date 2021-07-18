module.exports = (sequelize, DataTypes) => {
  const Unity = sequelize.define(
    'unities',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      descripcion: { type: DataTypes.STRING, allowNull: false }
    },
    { timestamps: false }
  );

  return Unity;
};
