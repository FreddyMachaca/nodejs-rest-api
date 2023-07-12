import express from "express";

const app = express();

//configurar o express para receber dados em json
app.use(express.json());

//MOCK significa simular uma API
const selecoes = [
  {
    id: 1,
    selecao: "Brasil",
    grupo: "G",
  },
  {
    id: 2,
    selecao: "Suíça",
    grupo: "G",
  },
  {
    id: 3,
    selecao: "Sérvia",
    grupo: "G",
  },
  {
    id: 4,
    selecao: "Costa Rica",
    grupo: "G",
  },
];

//função para buscar a seleção
function buscarSelecao(id) {
  return selecoes.filter(selecao=>selecao.id == id)
};

//função para buscar o index da seleção
function buscaIndexSelecao(id) {
  return selecoes.findIndex(selecao=>selecao.id == id)
};

//criar uma rota padrão
app.get("/", (req, res) => {
  res.send("API REST - Copa do Mundo");
});

app.get("/selecoes", (req, res) => {
    res.status(200).send(selecoes);
});

app.get('/selecoes/:id',(req,res)=>{
    //let index = req.params.id;
    res.json(buscarSelecao(req.params.id));
});

app.post('/selecoes', (req, res) => {
  selecoes.push(req.body);
  res.status(201).send('seleção adicionada com sucesso');
});

app.delete('/selecoes/:id', (req, res) => { //:id é um parâmetro
  let index = buscaIndexSelecao(req.params.id); //req.params.id é o id que vem da url
  selecoes.splice(index, 1); //splice é o método para remover um item do array
  res.status(200).send('seleção com id ' + req.params.id + ' removida com sucesso');
});

app.put('/selecoes/:id', (req, res) => {
  let index = buscaIndexSelecao(req.params.id);
  selecoes[index].selecao = req.body.selecao;
  selecoes[index].grupo = req.body.grupo;
  res.json(selecoes);
});

export default app;
