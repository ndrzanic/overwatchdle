import { Routes } from '@angular/router';

import { ClassicModeComponent } from './classic-mode/classic-mode.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'classic',
    component: ClassicModeComponent,
  },
];
