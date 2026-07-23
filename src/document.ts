import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export async function setupDocument(app: INestApplication) {
  await Promise.resolve();

  const swaggerConfig = new DocumentBuilder()
    .setTitle(process.env.npm_package_name || '')
    .setVersion(process.env.npm_package_version || '')
    .addSecurityRequirements('x-access-token')
    .addSecurityRequirements('x-refresh-token')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('swagger', app, swaggerDocument, {
    raw: ['json', 'yaml'],
  });
}
