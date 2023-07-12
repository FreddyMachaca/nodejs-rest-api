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

//criar uma rota padrão
app.get("/", (req, res) => {
  res.send("API REST - Copa do Mundo");
});

app.get("/selecoes", (req, res) => {
    res.status(200).send(selecoes);
});

app.post('/selecoes', (req, res) => {
  selecoes.push(req.body);
  res.status(201).send('seleção adicionada com sucesso');
});

export default app;
