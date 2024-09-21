import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CompletesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createCompleteDto: Prisma.CompleteCreateInput) {
    return this.databaseService.complete.create({
      data: createCompleteDto,
    });
  }

  async findAll(goalId: number) {
    return this.databaseService.complete.findMany({
      where: {
        goalId,
      },
    });
  }

  async findOne(id: number) {
    return this.databaseService.complete.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateCompleteDto: Prisma.CompleteUpdateInput) {
    return this.databaseService.complete.update({
      where: {
        id,
      },
      data: updateCompleteDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.complete.delete({
      where: {
        id,
      },
    });
  }
}
