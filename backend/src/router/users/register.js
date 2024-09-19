const express = require("express");
const router  = express.Router();
const Users   = require("../../models/Clients");
const bcrypt  = require("bcrypt");

router.post("/create", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    console.log("Requisição para /register/create", {
      name,
      email,
      password,
    });

    let user = await Users.findOne({ where: { email: email } });

    if (user) {
      const messageError = {
        status: 204,
        message: "E-mail ja utilizado em uma conta existente!",
      };
      return res.status(200).json(messageError);
    }

    if (password) {
      const newPassword = await bcrypt.hash(password, 10);

      user = await Users.create({
        name,
        email,
        password: newPassword,
        createdAt: new Date(),
      })
        .then((usuarioCriado) => {
          res.status(200).json({
            success: true,
            message: "Usuário criado com sucesso!",
            user: usuarioCriado,
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            success: false,
            message: "Erro ao usuário cliente",
            error: err.message,
          });
        });
    } else {
      res
        .status(500)
        .json({ error: "Senha não informada para criação de usuário." });
    }
  } catch (error) {
    console.error("Erro ao fazer criação de usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuário." });
  }
});

module.exports = router;
