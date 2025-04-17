// import { NestFactory } from '@nestjs/core';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';
// import { UsersModule } from './users.module';

// async function bootstrap() {
//   // Start HTTP service (default listening port 3000)
//   const app = await NestFactory.create(UsersModule);

//   // Bind TCP microservice (listening 3001)
//   app.connectMicroservice<MicroserviceOptions>({
//     transport: Transport.TCP,
//     options: {
//       port: 3001,
//     },
//   });

//   // Start microservice monitoring
//   await app.startAllMicroservices();

//   // start http application
//   await app.listen(3000);
//   console.log('🚀 HTTP running on http://localhost:3000');
//   console.log('📡 TCP Microservice listening on port 3001');
// }

// bootstrap();

import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001,
      },
    },
  );

  await app.listen();
}

bootstrap();