import { Module } from '@nestjs/common';
import { GoalSheetsController } from './goal-sheets.controller';
import { GoalSheetsService } from './goal-sheets.service';

@Module({
  controllers: [GoalSheetsController],
  providers: [GoalSheetsService]
})
export class GoalSheetsModule {}
