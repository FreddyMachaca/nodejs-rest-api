import express from 'express';

const app = express();

//criar uma rota padrão
app.get('/', (req, res) => {
    res.send('Olá Mundo!');
});

export default app;