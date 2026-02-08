import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator'

export class QuoteFormDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  phone: string

  @IsString()
  @IsOptional()
  company?: string

  @IsString()
  @IsNotEmpty()
  product: string

  @IsString()
  @IsNotEmpty()
  power: string

  @IsString()
  @IsNotEmpty()
  application: string

  @IsString()
  @IsOptional()
  budget?: string

  @IsString()
  @IsOptional()
  requirements?: string

  @IsString()
  @IsOptional()
  installationDate?: string

  @IsString()
  @IsOptional()
  message?: string
}
