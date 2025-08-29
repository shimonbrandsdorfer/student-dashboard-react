import 'dotenv/config';
import express from 'express';
import ApiRouter from './routes/api.js';
import AuthRouter from './routes/auth.js'
import SwaggerUIExpress from 'swagger-ui-express';
import fs from 'fs';

const fileContent = fs.readFileSync('apidoc.json', 'utf-8');
const swaggerDoc = JSON.parse(fileContent);


const PORT = process.env.PORT;


const app = express();

app.use(express.json());

app.use('/api-docs', SwaggerUIExpress.serve, SwaggerUIExpress.setup(swaggerDoc));

app.get('/', (req, res) => {
    res.send(`I am up and running`)
});

app.get('/ping', (_, res) => res.send('pong'));

app.use('/auth', AuthRouter);

app.use('/api', ApiRouter);



// global error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
})

app.listen(PORT, () => console.log(`go to http://localhost:${PORT}`));