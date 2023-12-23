import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OctokitModule } from 'nestjs-octokit';

@Module({
  imports: [
    OctokitModule.forRoot({
      isGlobal: true,
      octokitOptions: {
        auth: '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',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
