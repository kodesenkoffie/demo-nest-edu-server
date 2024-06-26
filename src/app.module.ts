import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TopicsModule } from './topics/topics.module';
import { UsersModule } from './users/users.module';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [AuthModule, SubjectsModule, TopicsModule, UsersModule, SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
