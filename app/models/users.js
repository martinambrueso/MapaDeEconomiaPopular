module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    user: { type: DataTypes.STRING, allowNull: false },
    pass: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  });

  return User;
};