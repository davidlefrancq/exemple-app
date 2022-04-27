import { Module } from '@nestjs/common';
import { ToDoListController } from './to-do-list.controller';

@Module({
  controllers: [ToDoListController]
})
export class ToDoListModule {}
