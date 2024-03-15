import { Component, Input } from '@angular/core';
import { Game } from '../Models/game';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
    cardImage!: string;
  @Input() cardTitle!: string;
  @Input() cardText!: string;
}
