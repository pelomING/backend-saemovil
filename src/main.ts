import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { format, utcToZonedTime } from 'date-fns-tz';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter());

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  const nDate = new Date().toLocaleString('es-ES', {
    timeZone: 'America/Santiago'
  });

  console.log("FECHA HOY:",nDate)

  const PORT = process.env.PORT ?? 3000;
    
  console.log(`App corriendo en puerto: ${ PORT } `)

  await app.listen( PORT );
}
bootstrap();
