import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  RouterOutlet,
    RouterLink,
    MatTooltipModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'my-app';
}
