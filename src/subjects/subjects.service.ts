import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class SubjectsService {
  constructor(private prisma: PrismaClient) {}

  async create(createSubjectDto: CreateSubjectDto) {
    const { name } = createSubjectDto;

    const subjectExists = await this.findUnique(name);

    if (subjectExists) {
      throw new ConflictException('Subject already exists');
    }

    return await this.prisma.subject.create({
      data: { name },
    });
  }

  async findUnique(name: string) {
    return await this.prisma.subject.findFirst({ where: { name } });
  }

  async findAll() {
    return await this.prisma.subject.findMany();
  }

  async findOne(id: number) {
    const subject = await this.prisma.subject.findUnique({
      where: { id },
    });
    if (!subject) {
      throw new NotFoundException(`Subject with ID ${id} not found`);
    }
    return subject;
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) {
    const ifExists = await this.findOne(id);
    if (!ifExists) {
      throw new NotFoundException('Subject not found.');
    }
    const { name } = updateSubjectDto;
    return await this.prisma.subject.update({
      where: { id },
      data: { name },
    });
  }

  async remove(id: number) {
    const ifExists = await this.findOne(id);
    if (!ifExists) {
      throw new NotFoundException('Subject not found.');
    }
    return this.prisma.subject.delete({
      where: { id: ifExists.id },
    });
  }
}
