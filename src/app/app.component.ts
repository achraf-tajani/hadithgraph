import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './services';
import OrgChart from '@balkangraph/orgchart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private supabaseService: SupabaseService) {}
  title = 'hadithgraph';
}
