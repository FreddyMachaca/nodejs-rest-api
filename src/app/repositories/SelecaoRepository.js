import { consulta } from "../database/conexao.js";

class SelecaoRepository {
  //CRUD
  create(selecao) {
    const sql = "INSERT INTO selecoes SET ?";
    return consulta(sql, selecao, "nao foi possivel adicionar a selecao");
  }

  findAll() {
    const sql = "SELECT * FROM selecoes";
    return consulta(sql, "nao foi possivel listar as selecoes");
  }

  findById(id) {
    const sql = `SELECT * FROM selecoes WHERE id=?`;
    return consulta(sql, id, "nao foi possivel listar a selecao");
  }

  update(selecao, id) {
    const sql = `UPDATE selecoes SET ? WHERE id=?`;
    return consulta(sql, [selecao, id], "nao foi possivel alterar a selecao");
  }

  delete(id) {
    const sql = `DELETE FROM selecoes WHERE id=?`;
    return consulta(sql, id, "nao foi possivel remover a selecao");
  }

}

export default new SelecaoRepository();
