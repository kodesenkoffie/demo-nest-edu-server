import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from 'src/helpers/third-party/encrypt-decrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaClient) {}

  async createUser(newUserData: {
    name?: string;
    username: string;
    password: string;
  }) {
    newUserData.password = await hashPassword(newUserData.password);
    const newUser = await this.prisma.user.create({
      data: newUserData,
    });
    return newUser;
  }

  async findUniqueUser(username: string) {
    const ifUserExists = await this.prisma.user.findFirst({
      where: { username },
    });
    return ifUserExists;
  }
}
