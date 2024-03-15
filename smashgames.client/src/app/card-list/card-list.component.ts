import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getAllGames(); 
    this.gameService.games$.subscribe(games => {
      console.log("Recieved games in component:", games);
      this.games = games;
    });
  }
}
