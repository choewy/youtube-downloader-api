import { Injectable } from '@nestjs/common';

import { YtDlp } from '@choewy/yt-dlp';
import { randomUUID } from 'crypto';

import { parseYoutubeKey } from './helpers/parse-youtube-key';

@Injectable()
export class AppService {
  async download(url: string) {
    const id = `${Date.now()}-${randomUUID()}`;
    const key = parseYoutubeKey(url);

    await new YtDlp({ url: `https://www.youtube.com/watch?v=${key}` })
      .format('bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best')
      .mergeFormat('mp4')
      .output(`assets/${id}.mp4`)
      .video()
      .download();

    return id;
  }
}
