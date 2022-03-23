import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  @Get()
  getUser(): string {
    return this.userService.getName();
  }
}
