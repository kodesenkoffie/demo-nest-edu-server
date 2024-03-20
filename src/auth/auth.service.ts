import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { SignUpDTO } from './dto/sign-up-dto';
import { UsersService } from 'src/users/users.service';
import { LoginDTO } from './dto/login-dto';
import { comparePassword } from 'src/helpers/third-party/encrypt-decrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(reqData: SignUpDTO) {
    const findUniqueUser = await this.userService.findUniqueUser(
      reqData.username,
    );

    if (findUniqueUser) {
      throw new ConflictException('Username already exists.');
    }

    const createNewUser = await this.userService.createUser(reqData);
    return createNewUser;
  }

  async login(reqData: LoginDTO) {
    const findUser = await this.userService.findUniqueUser(reqData.username);

    if (!findUser) {
      throw new NotFoundException('User does not exists.');
    }

    if (!findUser.password) {
      throw new UnauthorizedException('User password is not set.');
    }

    const validPassword = await comparePassword(
      reqData.password,
      findUser.password,
    );

    if (!validPassword) {
      throw new UnauthorizedException('Password does not match.');
    }

    const payload = {
      sub: findUser.id,
      username: findUser.username,
      role: findUser.userRole,
    };

    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
