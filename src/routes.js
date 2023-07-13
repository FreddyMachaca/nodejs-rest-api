import { Router } from "express";
import SelecaoController from "./app/controllers/SelecaoController.js";

const router = new Router();

//ROTAS
//GET LISTAR TODAS AS SELEÇÕES
router.get("/selecoes", SelecaoController.index);

//GET LISTAR UMA SELEÇÃO ESPECÍFICA
router.get('/selecoes/:id',SelecaoController.show);

//POST ADICIONAR UMA SELEÇÃO
router.post('/selecoes', SelecaoController.store);

//PUT ALTERAR UMA SELEÇÃO
router.put('/selecoes/:id', SelecaoController.update);

//DELETE REMOVER UMA SELEÇÃO
router.delete('/selecoes/:id', SelecaoController.delete);

export default router;
