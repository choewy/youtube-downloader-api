import { Body, Controller, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { DownloadDTO } from './dto/download.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async download(@Body() body: DownloadDTO) {
    return this.appService.download(body.url || '');
  }
}
