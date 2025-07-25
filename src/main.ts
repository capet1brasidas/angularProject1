import {bootstrapApplication, platformBrowser} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {HeaderComponent} from './app/header/header';


// this is used for standalone component
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));



// bootstrapApplication(HeaderComponent, appConfig).catch((err) => console.error(err));

// platformBrowserDynamic.bootstrapModule(AppModule);

