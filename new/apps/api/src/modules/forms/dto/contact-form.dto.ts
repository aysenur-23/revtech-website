import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator'

export class ContactFormDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsOptional()
  phone?: string

  @IsString()
  @IsNotEmpty()
  subject: string

  @IsString()
  @IsNotEmpty()
  message: string
}
