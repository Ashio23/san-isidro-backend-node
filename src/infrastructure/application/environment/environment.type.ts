export class Environment {
  NODE_ENV: 'local' | 'dev' | 'test' | 'qa' | 'prod';
  PORT: number;
  DB_HOST: string;
  DB_NAME: string;
  DB_PASSWORD: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_SOCKET_PATH: string;
}