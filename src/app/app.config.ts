import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PollService } from './poll-services/poll.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),PollService]
};
