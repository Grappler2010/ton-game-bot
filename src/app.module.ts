import dotenvConfig from '../dotenv.config';
import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppUpdate } from './app.update';
import { AppService } from './app.service';
import * as LocalSession from 'telegraf-session-local';

dotenvConfig();
const sessions = new LocalSession({ database: 'session_db.json' });
const TOKEN = process.env.TOKEN;

@Module({
  imports: [
    TelegrafModule.forRoot({
      middlewares: [sessions.middleware()],
      token: TOKEN,
    }),
  ],
  providers: [AppService, AppUpdate],
})
export class AppModule {}
