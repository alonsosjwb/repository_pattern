process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

//Env Files
import dotenv from 'dotenv';

dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});

console.log(process.env.APP_FOO);

import express from 'express';

const app: express.Application = express();

app.get('/', (req, res)=>{
 res.send('Hello KOSA');
});

import { container } from './container';
import { TestService } from './services/test.service';

const testService = container.resolve<TestService>('testService');

console.log("🚀 ~ file: app.ts ~ line 24 ~ testService", testService.get());

export { app };