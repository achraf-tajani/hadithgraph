import { Injectable } from '@angular/core';
import { supabase } from 'src/app/shared/database/supabase.api';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  constructor() {
    console.log('api started');
    console.log(supabase);
  }
}
