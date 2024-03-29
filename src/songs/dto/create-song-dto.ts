import { IsArray, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsArray()
  @IsString()
  @IsNotEmpty()
  readonly artists: string[];

  @IsNotEmpty()
  @IsDateString()
  readonly releasedDate: Date;

  @IsNotEmpty()
  @IsDateString()
  readonly duration: Date;
}
