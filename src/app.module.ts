import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { GoalsModule } from './goals/goals.module';

@Module({
  imports: [DatabaseModule, GoalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
