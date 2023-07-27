import * as Joi from 'joi';
import { Environment } from './environment.type';

export const environmentSchema = Joi.object<Environment, true>({
  NODE_ENV: Joi.string()
    .valid('local', 'dev', 'test', 'qa', 'prod')
    .default('local'),
  PORT: Joi.number().default(3000),
  DB_HOST: Joi.string().required(),
  DB_NAME: Joi.string(),
  DB_PASSWORD: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USERNAME: Joi.string().required(),
});
