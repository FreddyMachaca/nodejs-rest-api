import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno desde el archivo .env

const conexao = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

conexao.connect(); // Conecta a la base de datos

/**
 * Executa uma consulta no banco de dados com o sem valores
 * @param {*} sql  instrução sql a ser executada
 * @param {*} valores | [selecao, id] valores a serem pasados para a consulta
 * @param {*} mensagemReject mensagem a ser exibida caso ocorra um erro
 * @returns  objeto da promessa
 */
export const consulta = (sql, valores='',mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (erro, resultado) => {
      if (erro) return reject(mensagemReject);
      const row = JSON.parse(JSON.stringify(resultado));
      return resolve(resultado);
    });
  });
};

export default conexao; // Exporta la conexión para ser utilizada en otros archivos
