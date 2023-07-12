import app from "./src/app.js";
import database from "./infra/conexao.js";

const PORT = 3000;

//Conectar ao banco de dados
database.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("Banco de dados conectado com sucesso");
    //Escutar a porta 3000
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  }
});