import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractModule } from './contract/contract.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DatabaseSeeder } from 'seeders/database-initial.seeder';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'db',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    CompanyModule,
    ContractModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseSeeder],
})
export class AppModule {}
