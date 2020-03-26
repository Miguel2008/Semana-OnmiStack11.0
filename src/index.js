const express = require('express');
const cors = require('cors');
const routes =  require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso 
 * 
 * 
 * Métodos HTTP: 
 * 
 * GET: BUSCAR UMA INFORMAÇÃO DO BACK-END
 * POST: CRIAR UMA INFORMAÇÃO NO BACK-END
 * PUT: ALTERAR UMA INFORMAÇÃO NO BACK-END
 * DELETE: DELETAR UMA INFORMAÇÃO NO BACK-END
 */

/**
 * Tipos de parâmetros :
 * 
 * Query: Parâmetros nomeados enviados na rota após "?"  (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */


/**
 * SQL: MYSQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333);