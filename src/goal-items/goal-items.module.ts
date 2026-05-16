import { Module } from '@nestjs/common';
import { GoalItemsController } from './goal-items.controller';
import { GoalItemsService } from './goal-items.service';

@Module({
  controllers: [GoalItemsController],
  providers: [GoalItemsService]
})
export class GoalItemsModule {}
