import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-subpage-button',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './subpage-button.component.html',
  styleUrl: './subpage-button.component.css',
})
export class SubpageButtonComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() url!: string;
}
