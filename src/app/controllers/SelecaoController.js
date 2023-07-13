import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {
  //listar todos os registros
  async index(req, res) {
    const row = await SelecaoRepository.findAll();
    res.json(row);
  }

  //listar um registro
  async show(req, res) {
    const id = req.params.id;
    const row = await SelecaoRepository.findById(id);
    res.json(row);
  }

  //criar um registro
  async store(req, res) {
    const selecao = req.body;
    const row = await SelecaoRepository.create(selecao);
    res.json(row);
  }

  //atualizar um registro
  async update(req, res) {
    const selecao = req.body;
    const id = req.params.id;
    const row = await SelecaoRepository.update(selecao, id);
    res.json(row);
  }

  //remover um registro
  async delete(req, res) {
    const id = req.params.id;
    const row = await SelecaoRepository.delete(id);
    res.json(row);
  }
}

//padrao de projeto singleton
//singleton: padrao de projeto que garante que uma classe tenha uma unica instancia e fornece um ponto global de acesso a ela
export default new SelecaoController();
