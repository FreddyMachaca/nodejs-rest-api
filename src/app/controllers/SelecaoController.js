import conexao from '../database/conexao.js'
class SelecaoController {
  //listar todos os registros
  index(req, res) {
    const sql = "SELECT * FROM selecoes";
    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        console.log(erro);
        res.status(404).json({ erro: erro });
      } else {
        res.status(200).json(resultado);
      }
    });
  };

  //listar um registro
  show(req, res) {
    const id = req.params.id;
    const sql = `SELECT * FROM selecoes WHERE id=?`;
    conexao.query(sql, id, (erro, resultado) => {
      const linha = resultado[0]; //pega a primeira linha do resultado
      if (erro) {
        console.log(erro);
        res.status(404).json({ erro: erro });
      } else {
        res.status(200).json(linha);
      }
    });
  };

  //criar um registro
  store(req, res) {
    const selecao = req.body;
    const sql = 'INSERT INTO selecoes SET ?';
    conexao.query(sql, selecao, (erro, resultado)=>{
      if(erro){
        console.log(erro);
        res.status(404).json({'erro': erro});
      }else{
        res.status(201).json(resultado);
      }
    })
  };

  //atualizar um registro
  update(req, res) {
  const selecao = req.body;
  const id = req.params.id;
  const sql = `UPDATE selecoes SET ? WHERE id=?`;
  conexao.query(sql, [selecao, id], (erro, resultado)=>{
    if(erro){
      console.log(erro);
      res.status(404).json({'erro': erro});
    }else{
      res.status(200).json(resultado);
    }
  })
};

  //remover um registro
  delete (req, res) { //:id é um parâmetro
    const id = req.params.id;
    const sql = `DELETE FROM selecoes WHERE id=?`;
    conexao.query(sql, id, (erro, resultado)=>{
      if(erro){
        console.log(erro);
        res.status(404).json({'erro': erro});
      }else{
        res.status(200).json(resultado);
      }
    })
  }
};

//padrao de projeto singleton
//singleton: padrao de projeto que garante que uma classe tenha uma unica instancia e fornece um ponto global de acesso a ela
export default new SelecaoController();
