import { IsString } from 'class-validator';

export class SignUpDTO {
  @IsString()
  public name: string;

  @IsString()
  public username: string;

  @IsString()
  public password: string;
}
