import { Injectable } from '@nestjs/common';
import { Complete, Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CompletesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createCompleteDto: Prisma.CompleteCreateInput) {
    return this.databaseService.complete.create({
      data: createCompleteDto,
    });
  }

  async findAll(goalId: number, year: number, month: number) {
    if (isNaN(year) && isNaN(month)) {
      return this.databaseService.complete.findMany({
        where: {
          goalId,
        },
      });
    } else {
      return this.databaseService.$queryRaw<Complete[]>(
        Prisma.sql`SELECT * FROM "Complete" WHERE "goalId"=${goalId} AND date_part('YEAR', date)=${year} AND date_part('MONTH', date)=${month}`,
      );
    }
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
