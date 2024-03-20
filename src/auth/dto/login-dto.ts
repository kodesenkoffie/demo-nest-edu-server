import { IsString } from 'class-validator';

export class LoginDTO {
  @IsString()
  public username: string;

  @IsString()
  public password: string;
}
