const express = require("express");
const app = express();
const db = require("./src/db/connection");
const bodyParser = require("body-parser");
const userLoginRouter = require("./src/router/users/login");
const userRegisterRouter = require("./src/router/users/register");
const cors = require("cors");

const port = 3001;

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/login", userLoginRouter);
app.use("/register", userRegisterRouter);

db.authenticate()
  .then(() => {
    console.log("Conexão feita com sucesso ao banco de dados");
  })
  .catch((error) => {
    console.log("Conexão falhou", error);
  });

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
