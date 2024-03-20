import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [SubjectsController],
  providers: [SubjectsService, PrismaClient],
  exports: [SubjectsService],
})
export class SubjectsModule {}
