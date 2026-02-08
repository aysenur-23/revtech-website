import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common'
import { FormsService } from './forms.service'
import { ContactFormDto, QuoteFormDto } from './dto'

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post('contact')
  @HttpCode(HttpStatus.OK)
  async submitContactForm(@Body() contactData: ContactFormDto) {
    return this.formsService.handleContactForm(contactData)
  }

  @Post('quote')
  @HttpCode(HttpStatus.OK)
  async submitQuoteForm(@Body() quoteData: QuoteFormDto) {
    return this.formsService.handleQuoteForm(quoteData)
  }
}
