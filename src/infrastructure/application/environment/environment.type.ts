export class Environment {
  NODE_ENV: 'local' | 'dev' | 'test' | 'qa' | 'prod';
  PORT: number;
  TIMEZONE_DEFAULT: string;
  LOCAL_DEFAULT: string;
  CLOUD_FRONT_URL: string;
}
