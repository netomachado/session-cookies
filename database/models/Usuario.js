module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      notNull: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(100),
      notNull: true
    },
    email: {
      type: DataTypes.STRING(60),
      notNull: true,
      unique: true
    },
    senha: {
      type: DataTypes.CHAR(60),
      notNull: true
    },
  }, {
    tablename: 'usuarios',
    timestamps: false
  });

  return Usuario;
}