// https://youtu.be/KEY
// https://www.youtube.com/watch?v=KEY

import { BadRequestException } from '@nestjs/common';

// https://www.youtube.com/shorts/KEY
export function parseYoutubeKey(url: string) {
  let target: URL;

  try {
    target = new URL(url);
  } catch {
    throw new BadRequestException('invalid url');
  }

  const hostname = target.hostname.toLowerCase();

  if (!['youtu.be', 'youtube.com', 'www.youtube.com'].includes(hostname)) {
    throw new BadRequestException('invalid url');
  }

  let key = '';

  switch (hostname) {
    case 'youtu.be':
      key = target.pathname.slice(1);
      break;

    case 'youtube.com':
    case 'www.youtube.com':
      if (target.pathname === '/watch') {
        key = target.pathname.slice(1);
      } else if (target.pathname.startsWith('/shorts/')) {
        key = target.pathname.split('/')[2];
      }
      break;
  }

  if (!key) {
    throw new BadRequestException('invalid url');
  }

  return key;
}
