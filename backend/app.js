import 'dotenv/config';
import express from 'express';
import ApiRouter from './routes/api.js';
import statusCheck from './routes/statusCheck.js';
import loginRouter from './routes/login.js';
import SwaggerUIExpress from 'swagger-ui-express';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const fileContent = fs.readFileSync('apidoc.json', 'utf-8');
const swaggerDoc = JSON.parse(fileContent);


const PORT = process.env.PORT;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'],
    credentials: true
}));

app.use('/api-docs', SwaggerUIExpress.serve, SwaggerUIExpress.setup(swaggerDoc));






app.use('/authApi', loginRouter);
  


/* this route checks if the user is logged in */
// app.use((req, res, next) => {
    
    

//     try {
//        /*  console.log('token provided', req.cookies); */
//         const token = req.cookies?.authToken;

//     if (!token) {
       
//         let url = req.originalUrl;
//         console.log('No token provided', url);

//         return res.status(401).json({ message: 'Not authenticated.', url: url });
//     }
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded; // { userId, email }
//         //console.log('Decoded token:', decoded);
//         next();
//     } catch (err) {
//         console.error('JWT verification failed:', err);
//         return res.status(403).json({ message: 'Invalid or expired token.' });
//     }
// });


/* all routs where the user needs to be logged in, needs to go below this line */




app.use('/status', statusCheck);

app.use('/api', ApiRouter);



// global error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
})

app.listen(PORT, () => console.log(`go to http://localhost:${PORT}`));
