import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  is_agent: boolean;

  @IsOptional()
  @IsString()
  companyCode: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  limit: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  offset: number;
}
