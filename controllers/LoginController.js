const bcrypt = require("bcryptjs");
const UsuarioModel = require('../models/usuarios');

exports.criarUsuario = ({ nome, email, senha }) => {
  const senhaCriptografada = bcrypt.hashSync(senha);

  const usuario = UsuarioModel.criarUmUsuario({ nome, email, senha: senhaCriptografada });

  return usuario.dataValues;
};

exports.logarUsuario = async ({ email, senha }) => {
  const usuario = await UsuarioModel.listarUsuarioPorEmail({ email });
  
  if (!usuario) {
    throw new Error("Access denied");
  }

  const senhaCheck = bcrypt.compareSync(senha, usuario.senha);

  if (!senhaCheck) {
    throw new Error("Access denied");
  }

  return usuario.dataValues;
};