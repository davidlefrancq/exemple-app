import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CalendarModule } from './calendar/calendar.module';
import { ToDoListModule } from './to-do-list/to-do-list.module';

@Module({
  imports: [UserModule, CalendarModule, ToDoListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
