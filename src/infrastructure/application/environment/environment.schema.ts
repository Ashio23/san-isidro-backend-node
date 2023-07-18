import * as Joi from 'joi';
import { Environment } from './environment.type';

export const environmentSchema = Joi.object<Environment, true>({
  NODE_ENV: Joi.string()
    .valid('local', 'dev', 'test', 'qa', 'prod')
    .default('local'),
  PORT: Joi.number().default(3000),
  CLOUD_FRONT_URL: Joi.string().uri().required(),
  LOCAL_DEFAULT: Joi.string().required(),
  TIMEZONE_DEFAULT: Joi.string().required(),
});
