import { ApiProperty } from '@nestjs/swagger';

export class DownloadDTO {
  @ApiProperty({ type: String, format: 'uri' })
  readonly url!: string;
}
