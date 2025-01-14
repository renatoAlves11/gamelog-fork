var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

var indexRouter = require('./routes/index');
var avaliacoesRouter = require('./routes/avaliacoes');
var jogosRouter = require('./routes/jogos');
var listasRouter = require('./routes/listas');
var perfilRouter = require('./routes/perfil')

var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/avaliacoes', avaliacoesRouter);
app.use('/jogos', jogosRouter);
app.use('/listas', listasRouter);
app.use('/perfil', perfilRouter);

/*
const PORT = 3000;
const MONGO_URI = 'string pra conectar no mongo';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Erro de conexão a base de dados:', err));
*/

module.exports = app;
