const { Usuario } = require('../database/models');

exports.criarUmUsuario = (usuario) => Usuario.create(usuario);

exports.listarUsuarioPorEmail = ({ email }) => {
  const usuarioEncontrado = Usuario.findOne({ where: { email }});
  return usuarioEncontrado;
};