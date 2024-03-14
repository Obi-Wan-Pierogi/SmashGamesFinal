import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Studio } from './Models/Studio';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  studio$: BehaviorSubject<Studio> = new BehaviorSubject<Studio>({});

  constructor(private http: HttpClient) { }

  // hook up our api to return the studio information and save back as the next value of this.studio$
get studio() {
    this.http.get<Studio>('http://localhost:3000/studio').subscribe(
      (data) => {
        this.studio$.next(data);
      }
    );
    return this.studio$;
  }
}
