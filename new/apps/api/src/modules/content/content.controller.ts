import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ContentService } from './content.service';

@ApiTags('Content')
@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get('config')
  @ApiOperation({ summary: 'Get site configuration' })
  @ApiResponse({ status: 200, description: 'Site configuration' })
  getConfig() {
    return this.contentService.getConfig();
  }
}
