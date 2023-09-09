import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { RadiceComponent } from './radice/radice.component';

bootstrapApplication(RadiceComponent).catch((errore) => console.error(errore));
