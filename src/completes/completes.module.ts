import { Module } from '@nestjs/common';
import { CompletesService } from './completes.service';
import { CompletesController } from './completes.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CompletesController],
  providers: [CompletesService],
})
export class CompletesModule {}
