import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
 
  games$: BehaviorSubject<Game[]> = new BehaviorSubject<Game[]>([]);
  game$: Subject<Game> = new Subject<Game>();

  constructor(private http: HttpClient) { }

  getAllGames() {
    this.http.get<any>('/api/games').subscribe(response => {
      if (response && Array.isArray(response.$values)) {
        this.games$.next(response.$values);
      } else {
        console.error('Expected an array of games, but received:', response);
      }
    }, error => {
      console.error("Error fetching games:", error);
    });
  }

  getGamebyID(id: number) {
    return this.http.get<Game>('/api/games/' + id).subscribe(data => {
      this.game$.next(data);
    })
  }
}
