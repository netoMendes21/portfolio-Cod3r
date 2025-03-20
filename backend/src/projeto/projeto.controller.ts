import { Controller, Get, Param } from '@nestjs/common';
import { ProjetoPrisma } from './projeto.prisma';
import { Projeto } from '@core';

@Controller('projetos')
export class ProjetoController {
  constructor(private readonly repo: ProjetoPrisma) {}

  @Get()
  async obterTodosProjetos(): Promise<Projeto[]> {
    return this.repo.obterTodosProjetos();
  }

  @Get(':id')
  async obterProjetoPorId(@Param('id') id: number): Promise<Projeto | null> {
    return this.repo.obterProjetoPorId(Number(id));
  }
}
