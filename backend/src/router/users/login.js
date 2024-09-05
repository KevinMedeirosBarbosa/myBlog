const express = require("express");
const router = express.Router();
const Users = require("../../models/Clients");
const { Sequelize } = require("sequelize");

router.post("/google", async (req, res) => {
  const { googleID, name, email } = req.body;

  try {
    console.log("Requisição para /login/google:", {
      googleID,
      name,
      email,
    });

    let user = await Users.findOne({
      where: Sequelize.or({ googleID: googleID }, { email: email }),
    });

    if (!user) {
      console.log("Usuário não encontrado. Criando novo usuário...");

      user = await Users.create({
        name,
        email,
        googleID,
        facebookID: "",
        createdAt: new Date(),
      })
        .then((usuarioCiado) => {
          res.status(200).json({
            success: true,
            message: "Usuário criado com sucesso!",
            user: usuarioCiado,
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({
            success: false,
            message: "Erro ao criar o usuário.",
            error: error.message,
          });
        });
    }

    res.json(user);
  } catch (error) {
    console.error("Erro ao fazer login com o Google:", error);
    res.status(500).json({ error: "Erro ao fazer login com o Google." });
  }
});

router.post("/facebook", async (req, res) => {
  const { facebookID, name, email } = req.body;

  try {
    console.log("Requisição para /login/facebook:", {
      facebookID,
      name,
      email,
    });

    let user = await Users.findOne({
      where: Sequelize.or({ facebookID: facebookID }, { email: email }),
    });

    if (!user) {
      console.log("Usário não encontrado. Criando novo usuário...");

      user = await Users.create({
        name,
        email,
        facebookID,
        googleID: "",
        createdAt: new Date(),
      })
        .then((usuarioCriado) => {
          res.status(200).json({
            success: true,
            message: "Usuário criado com sucesso!",
            user: usuarioCriado,
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({
            success: false,
            message: "Erro ao criar o usuário.",
            error: error.message,
          });
        });
    }
    res.json(user);
  } catch (error) {
    console.error("Erro ao fazer login com o Facebook:", error);
    res.status(500).json({ error: "Erro ao fazer login com o Facebook." });
  }
});

module.exports = router;
