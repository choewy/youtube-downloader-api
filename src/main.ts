import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { setupDocument } from './document';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await setupDocument(app);
  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
