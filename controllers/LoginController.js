const bcrypt = require("bcryptjs");
const UsuarioModel = require("../models/Usuario");

exports.criarUsuario = (nome, email, senha) => {
  const senhaCriptografada = bcrypt.hashSync(senha);

  const usuario = UsuarioModel.criarUmUsuario(nome, email, senhaCriptografada);

  return usuario;
};

exports.logarUsuario = ({ email, senha }) => {
  const usuario = UsuarioModel.listarUsuarioPorEmail({ email });

  const senhaCheck = bcrypt.compareSync(senha, usuario.senha);

  if (!usuario) {
    throw new Error("Access denied");
  }
  if (!senhaCheck) {
    throw new Error("Access denied");
  }

  return usuario;
};