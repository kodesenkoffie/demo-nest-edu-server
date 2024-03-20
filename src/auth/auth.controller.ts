import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDTO } from './dto/sign-up-dto';
import { LoginDTO } from './dto/login-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-up')
  signUp(@Body() reqData: SignUpDTO) {
    return this.authService.signUp(reqData);
  }

  @Post('/login')
  login(@Body() reqData: LoginDTO) {
    return this.authService.login(reqData);
  }
}
