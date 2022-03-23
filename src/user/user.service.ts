import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private name: string;

  getName(): string {
    return this.name;
  }

  setName(user: any) {
    this.name = user.name;
  }
}
