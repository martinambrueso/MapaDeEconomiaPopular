module.exports = (sequelize, DataTypes) => {
  const BusinessArea = sequelize.define(
    'businessAreas',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false }
    },
    { timestamps: false }
  );

  return BusinessArea;
};
