import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGames().subscribe((games) => {
      this.cards = games.map(game => ({
        cardImage: game.ImageUrl,
        cardTitle: game.Title,
        cardText: game.ShortDescription
      }));
    });
  }
}
