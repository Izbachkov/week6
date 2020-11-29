import express from 'express';
import bodyParser from 'body-parser';
import createReadStream from 'fs';
import crypto from 'crypto';
import http from 'http';

import myServer from './app.js';

const app = myServer(express, bodyParser, createReadStream, crypto, http);

app.listen(app.port);
