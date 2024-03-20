import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TopicsModule } from './topics/topics.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, SubjectsModule, TopicsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
