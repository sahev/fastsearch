import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async search(tex): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const googleIt = require('google-it');
    const results = [];
    const options = [
      {
        disableConsole: true,
      },
    ];

    await googleIt({ options, disableConsole: true, query: tex })
      .then((res) => {
        res.map((t) => {
          results.push(t[1].title);
          console.log('service', t[1].title);
        });
      })
      .catch((e) => {
        // any possible errors that might have occurred (like no Internet connection)
      });
    return results;
  }
}
