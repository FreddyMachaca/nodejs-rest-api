import app from "./app.js";
const PORT = process.env.PORT || 3000;
 
//Escutar a porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
