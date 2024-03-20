import { Module } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { TopicsController } from './topics.controller';
import { PrismaClient } from '@prisma/client';
import { SubjectsModule } from 'src/subjects/subjects.module';

@Module({
  imports: [SubjectsModule],
  controllers: [TopicsController],
  providers: [TopicsService, PrismaClient],
})
export class TopicsModule {}
