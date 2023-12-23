import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OctokitModule } from 'nestjs-octokit';
import { GITHUB_ACCESS_TOKEN } from './app.constants';

@Module({
  imports: [
    OctokitModule.forRoot({
      isGlobal: true,
      octokitOptions: {
        auth: GITHUB_ACCESS_TOKEN,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
