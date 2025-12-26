import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './app/loading-interceptor';

providers:[
  provideHttpClient(withInterceptors([loadingInterceptor]))
]
bootstrapApplication(App, appConfig,)
  .catch((err) => console.error(err));


