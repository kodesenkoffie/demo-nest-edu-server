import { IsString, Length } from 'class-validator';

export class CreateSubjectDto {
  @IsString()
  @Length(1, 255)
  name: string;
}
