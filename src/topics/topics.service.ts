import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { SubjectsService } from 'src/subjects/subjects.service';

@Injectable()
export class TopicsService {
  constructor(
    private prisma: PrismaClient,
    private subjectService: SubjectsService,
  ) {}

  async create(createTopicDto: CreateTopicDto) {
    const { name, subjectId } = createTopicDto;

    await this.subjectService.findOne(subjectId);
    const ifExists = await this.findUnique(createTopicDto);

    if (ifExists) {
      throw new ConflictException('Topic already exists.');
    }

    return this.prisma.topic.create({
      data: {
        name,
        Subject: { connect: { id: subjectId } },
      },
    });
  }

  async findUnique(uniqueTopic: { subjectId: number; name: string }) {
    return this.prisma.topic.findFirst({
      where: { subjectId: uniqueTopic.subjectId, name: uniqueTopic.name },
    });
  }

  async findAll() {
    return this.prisma.topic.findMany();
  }

  async findOne(id: number) {
    const topic = await this.prisma.topic.findUnique({
      where: { id },
      include: { Subject: true },
    });
    if (!topic) {
      throw new NotFoundException(`Topic with ID ${id} not found`);
    }
    return topic;
  }

  async update(id: number, updateTopicDto: UpdateTopicDto) {
    const ifExists = await this.findOne(id);
    if (!ifExists) {
      throw new NotFoundException('Topic not found.');
    }

    const { name } = updateTopicDto;
    return this.prisma.topic.update({
      where: { id },
      data: { name },
    });
  }

  async remove(id: number) {
    const ifExists = await this.findOne(id);
    if (!ifExists) {
      throw new NotFoundException('Topic not found.');
    }
    return this.prisma.topic.delete({
      where: { id: ifExists.id },
    });
  }
}
