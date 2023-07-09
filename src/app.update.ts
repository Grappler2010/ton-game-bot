import { AppService } from './app.service';
import { Telegraf, Context } from 'telegraf';
import { InjectBot, Start, Update } from 'nestjs-telegraf';
import { actionButtons } from './app.buttons';

@Update()
export class AppUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly appService: AppService,
  ) {}

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply('Приветствую в (текст)');
    await ctx.reply('условия игры');
    await ctx.reply(
      'Мы даем возможность попробавать бесплатно 3 раза',
      actionButtons(),
    );
  }
}
