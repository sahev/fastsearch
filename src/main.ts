import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { create } from 'venom-bot';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

create('teste')
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

async function start(client) {
  client.onMessage(async (message) => {
    if (message.isGroupMsg === false) {
      const res = new AppService().search(message.body);

      client
        .sendText(message.from, res)
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}

bootstrap();
