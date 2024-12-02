import { IsString, IsNumber } from 'class-validator';

export class CreateCatDto {
  @IsString()
  key: string;

  @IsString()
  name: string;

  @IsNumber()
  age: number;
}
