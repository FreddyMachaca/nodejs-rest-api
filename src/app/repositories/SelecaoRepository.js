import conexao from '../database/conexao.js';

class SelecaoRepository {
  //CRUD
  create(selecao) {
    const sql = "INSERT INTO selecoes SET ?";
    return new Promise((resolve, reject) => {
      conexao.query(sql, selecao, (erro, resultado) => {
        if (erro) return reject("nao foi possivel cadastrar a selecao");
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(resultado);
      });
    });
  }
  findAll() {
    const sql = "SELECT * FROM selecoes";
    return new Promise((resolve, reject) => {
      conexao.query(sql, (erro, resultado) => {
        if (erro) return reject("nao foi possivel listar as selecoes");
        //fazer o parse dos resultados
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }

  findById(id) {
    const sql = `SELECT * FROM selecoes WHERE id=?`;
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, resultado) => {
        if (erro) return reject("nao foi possivel listar a selecao");
        //fazer o parse dos resultados
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }

  update(selecao, id) {
    const sql = `UPDATE selecoes SET ? WHERE id=?`;
    return new Promise((resolve, reject) => {
        conexao.query(sql, [selecao, id], (erro, resultado) => {
            if (erro) return reject("nao foi possivel atualizar a selecao");
            const row = JSON.parse(JSON.stringify(resultado));
            return resolve(row);
        });
    });
  }

  delete(id) {
    const sql = `DELETE FROM selecoes WHERE id=?`;
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, resultado) => {
        if (erro) return reject("nao foi possivel remover a selecao");
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }
  
}

export default new SelecaoRepository();
