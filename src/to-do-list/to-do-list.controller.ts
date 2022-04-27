import { Controller, Get, Post } from '@nestjs/common';

@Controller('todolist')
export class ToDoListController {
  constructor() {}

  @Get()
  getToDoList(): any {
    return {};
  }

  @Post()
  addToTodolist(item: string): string {
    console.log({ item });
    return 'item:' + item;
  }

  @Post()
  deleteItemInTodolist(itemId: string): string {
    console.log({ itemId });
    return 'Delete item:' + itemId;
  }

  @Post()
  updateItemInTodolist(itemId: string, item: string): string {
    console.log({ itemId, item });
    return 'Update item:' + itemId + '\nAdd :' + item;
  }
}
