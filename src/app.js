import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from './config';
import routes from './routes';

let app = express();
app.server = http:createServer(app);

//middleware

//pasport config

//api routes v1