import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import project from './routers/project.routes';
import auth from './routers/auth.routes'

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(project);
app.use(auth);



export default app;

