import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { BooksAppModule } from './books-app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BooksAppModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3002, // ✅ 监听 Books 微服务的 TCP 通信端口
      },
    },
  );

  await app.listen();
}
bootstrap();
