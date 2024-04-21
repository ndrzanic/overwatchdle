import { Component } from '@angular/core';

import { SubpageButtonComponent } from '../subpage-button/subpage-button.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [SubpageButtonComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
