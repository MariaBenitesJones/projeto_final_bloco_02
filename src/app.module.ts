import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaController } from './categoria/controllers/categoria.controller';
import { ProdutoController } from './produto/controllers/produto.controller';
import { ProdutoService } from './produto/services/produto.service';
import { CategoriaService } from './categoria/services/categoria.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database:'db_projetofinalbloco02',
      entities: [Categoria, Produto],
      synchronize: true,
    }),
    CategoriaModule,
    ProdutoModule
  ],
  controllers: [CategoriaController, ProdutoController],
  providers: [CategoriaService, ProdutoService],
})
export class AppModule {}
