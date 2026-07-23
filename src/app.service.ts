import { YtDlp } from '@choewy/yt-dlp';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  getHello(): string {
    return 'Hello World!';
  }

  async onApplicationBootstrap() {
    const key = 'axYkpXTaxCw';
    const url = `https://www.youtube.com/watch?v=${key}`;
    const output = `assets/${Date.now()}.mp4`;

    await new YtDlp({ url })
      .format('bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best')
      .mergeFormat('mp4')
      .output(output)
      .video()
      .download();
  }
}
