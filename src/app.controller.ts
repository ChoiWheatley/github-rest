import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { OctokitService } from 'nestjs-octokit';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly octokitService: OctokitService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/pulls')
  async pulls(): Promise<Response> {
    const res = await this.octokitService.request(
      'GET /repos/Jungle-7-Algorithm-study/Algorithm-Study/pulls',
      {
        owner: 'Jungle-7-Algorithm-study',
        repo: 'Algorithm-Study',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );
    return res.data;
  }
}
