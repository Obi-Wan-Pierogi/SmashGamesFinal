import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Studio } from './Models/Studio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  studio: BehaviorSubject<Studio> = this.data.studio$;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    
  }

  title = 'smashgames.client';
}
