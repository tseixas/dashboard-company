import { Injectable } from '@nestjs/common';
import { Users } from 'src/users/users.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseSeeder {
  constructor(private readonly dataSource: DataSource) {}

  async seed() {
    const userRepository = this.dataSource.getRepository(Users);

    const userCount = await userRepository.count();

    if (userCount === 0) {
      await userRepository.save([
        {
          name: 'Admin',
          email: 'admin@teste.com',
          password:
            '$2b$10$xr/Gfpd8e0qbYGIrBQ3f8uW0f1le07j.xguJEPNjWCxaqSahsX9.y',
          isActive: true,
        },
      ]);
      console.log('Dados iniciais inseridos!');
    } else {
      console.log('O banco de dados já possui dados.');
    }
  }
}
