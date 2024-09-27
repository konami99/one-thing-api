import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CompletesService } from './completes.service';
import { Prisma } from '@prisma/client';

@Controller('completes')
export class CompletesController {
  constructor(private readonly completesService: CompletesService) {}

  @Post()
  create(@Body() createCompleteDto: Prisma.CompleteCreateInput) {
    return this.completesService.create(createCompleteDto);
  }

  @Get()
  findAll(
    @Query('goalId') goalId: string,
    @Query('year') year: string,
    @Query('month') month: string,
  ) {
    return this.completesService.findAll(+goalId, +year, +month);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.completesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompleteDto: Prisma.CompleteUpdateInput,
  ) {
    return this.completesService.update(+id, updateCompleteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.completesService.remove(+id);
  }
}
