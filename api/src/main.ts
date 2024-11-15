import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { DatabaseSeeder } from 'seeders/database-initial.seeder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const databaseSeeder = app.get(DatabaseSeeder);
  await databaseSeeder.seed();

  const args = process.argv;

  if (args.includes('--seed')) {
    const databaseSeeder = app.get(DatabaseSeeder);
    await databaseSeeder.seed();
    process.exit(0);
  }

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        const result = errors.map((error) => ({
          property: error.property,
          message: error.constraints[Object.keys(error.constraints)[0]],
        }));
        return new BadRequestException(result);
      },
      stopAtFirstError: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Dashboard Company')
    .setDescription('Endpoints list')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
