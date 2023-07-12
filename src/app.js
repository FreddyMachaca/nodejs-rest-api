import express from "express";
import conexao from "../infra/conexao.js";

const app = express();

//configurar o express para receber dados em json
app.use(express.json());

//função para buscar a seleção
function buscarSelecao(id) {
  return selecoes.filter(selecao=>selecao.id == id)
};

//função para buscar o index da seleção
function buscaIndexSelecao(id) {
  return selecoes.findIndex(selecao=>selecao.id == id)
};

//ROTAS
//GET LISTAR TODAS AS SELEÇÕES
app.get("/selecoes", (req, res) => {
    //res.status(200).send(selecoes);
    const sql = 'SELECT * FROM selecoes';
    conexao.query(sql,(erro, resultado)=>{
      if(erro){
        console.log(erro);
        res.status(400).json({'erro': erro});
      }else{
        res.status(200).json(resultado);
      }
    })
});

app.get('/selecoes/:id',(req,res)=>{
  //res.json(buscarSelecao(req.params.id));
  const id = req.params.id;
  const sql = `SELECT * FROM selecoes WHERE id=?`;
  conexao.query(sql, id, (erro, resultado)=>{
    const linha = resultado[0]; //pega a primeira linha do resultado
    if(erro){
      console.log(erro);
      res.status(400).json({'erro': erro});
    }else{
      res.status(200).json(linha);
    }
  })
});

//POST ADICIONAR UMA SELEÇÃO
app.post('/selecoes', (req, res) => {
  // selecoes.push(req.body);
  // res.status(201).send('seleção adicionada com sucesso');
  const selecao = req.body;
  const sql = 'INSERT INTO selecoes SET ?';
  conexao.query(sql, selecao, (erro, resultado)=>{
    if(erro){
      console.log(erro);
      res.status(400).json({'erro': erro});
    }else{
      res.status(201).json(resultado);
    }
  })
});

//DELETE REMOVER UMA SELEÇÃO
app.delete('/selecoes/:id', (req, res) => { //:id é um parâmetro
  // let index = buscaIndexSelecao(req.params.id); //req.params.id é o id que vem da url
  // selecoes.splice(index, 1); //splice é o método para remover um item do array
  // res.status(200).send('seleção com id ' + req.params.id + ' removida com sucesso');

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
});

//PUT ALTERAR UMA SELEÇÃO
app.put('/selecoes/:id', (req, res) => {
  // let index = buscaIndexSelecao(req.params.id);
  // selecoes[index].selecao = req.body.selecao;
  // selecoes[index].grupo = req.body.grupo;
  // res.json(selecoes);
  const selecao = req.body;
  const id = req.params.id;
  const sql = `UPDATE selecoes SET ? WHERE id=?`;
  conexao.query(sql, [selecao, id], (erro, resultado)=>{
    if(erro){
      console.log(erro);
      res.status(400).json({'erro': erro});
    }else{
      res.status(200).json(resultado);
    }
  })
});

export default app;
