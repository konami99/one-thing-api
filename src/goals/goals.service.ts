import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class GoalsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createGoalDto: Prisma.GoalCreateInput) {
    return this.databaseService.goal.create({
      data: createGoalDto,
    });
  }

  async findAll(userId: number) {
    return this.databaseService.goal.findMany({
      where: {
        userId,
      },
    });
  }

  async findOne(id: number) {
    return this.databaseService.goal.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateGoalDto: Prisma.GoalUpdateInput) {
    return this.databaseService.goal.update({
      where: {
        id,
      },
      data: updateGoalDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.goal.delete({
      where: {
        id,
      },
    });
  }
}
