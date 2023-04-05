import { Component } from '@angular/core';
import { SupabaseService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private supabaseService: SupabaseService) {}
  title = 'hadithgraph';
}
