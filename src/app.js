import express from "express";
import SelecaoController from "./app/controllers/SelecaoController.js";

const app = express();

//configurar o express para receber dados em json
app.use(express.json());

//ROTAS
//GET LISTAR TODAS AS SELEÇÕES
app.get("/selecoes", SelecaoController.index);

//GET LISTAR UMA SELEÇÃO ESPECÍFICA
app.get('/selecoes/:id',SelecaoController.show);

//POST ADICIONAR UMA SELEÇÃO
app.post('/selecoes', SelecaoController.store);

//PUT ALTERAR UMA SELEÇÃO
app.put('/selecoes/:id', SelecaoController.update);

//DELETE REMOVER UMA SELEÇÃO
app.delete('/selecoes/:id', SelecaoController.delete);

export default app;
