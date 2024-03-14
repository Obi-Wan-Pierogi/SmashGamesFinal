import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Studio } from './Models/Studio';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  studio$: BehaviorSubject<Studio> = new BehaviorSubject<Studio>({});

  constructor(private http: HttpClient) {
    this.getStudio(1);
  }

  // hook up our api to return the studio information and save back as the next value of this.studio$

  //get all studios
  getAllStudios(): Observable<Studio[]> {
    return this.http.get<Studio[]>('/api/Studios');  
  }
getStudio(id: number) {
    this.http.get<Studio>('/api/Studios/' + id).subscribe(data => {
        this.studio$.next(data);
      });
  }
}
