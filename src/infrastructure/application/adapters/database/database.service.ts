import { EnvironmentService } from '@infrastructure/application/environment';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
  constructor(private readonly environmentService: EnvironmentService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const sharedTypeOrmModuleOptions: TypeOrmModuleOptions = {
      type: 'mysql',
      port: this.environmentService.get('DB_PORT'),
      username: this.environmentService.get('DB_USERNAME'),
      password: this.environmentService.get('DB_PASSWORD'),
      database: this.environmentService.get('DB_NAME'),
      autoLoadEntities: true,
    };

    return {
      ...sharedTypeOrmModuleOptions,
      host: this.environmentService.get('DB_HOST'),
    };
  }
}
