import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTopicDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  subjectId: number;
}
