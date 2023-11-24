import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css'],
  providers: [CardService]
})
export class CardDisplayComponent implements OnInit{
  characters: any[] = [];

  constructor(
    private _cardService: CardService
  ){

  }

  ngOnInit(){
    this._cardService.getCharacters().subscribe(
      response => {
        if(response) {
          this.characters = response.results
        }
      },
      error => {
        console.log(error);
      }
    )
  }
}
