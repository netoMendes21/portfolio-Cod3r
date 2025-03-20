import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';
import { Projeto } from '@core';

@Injectable()
export class ProjetoPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  // eslint-disable-next-line @typescript-eslint/require-await
  async obterTodosProjetos(): Promise<Projeto[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.prisma.projeto.findMany() as any;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async obterProjetoPorId(id: number): Promise<Projeto | null> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.prisma.projeto.findUnique({
      where: { id },
      include: { tecnologias: true },
    }) as any;
  }
}
