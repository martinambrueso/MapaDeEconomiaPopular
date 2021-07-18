module.exports = (sequelize, DataTypes) => {
  const Subunity = sequelize.define(
    'subunities',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      descripcion: { type: DataTypes.STRING, allowNull: false }
    },
    { timestamps: false }
  );

  Subunity.associate = models => {
    Subunity.belongsTo(models.unities, {
      as: 'unities',
      foreignKey: 'unityId'
    });
  };
  return Subunity;
};
