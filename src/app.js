import express from "express";

const app = express();

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

export default app;
