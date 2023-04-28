import express from 'express';
import { serve, setup } from 'swagger-ui-express'
import yaml from 'yamljs';
import { fileURLToPath } from 'url';

const swaggerPath = fileURLToPath(new URL('swagger.yaml', import.meta.url));

const app = express();

app.use('/', serve, setup(yaml.load(swaggerPath)));

app.listen(3002);
