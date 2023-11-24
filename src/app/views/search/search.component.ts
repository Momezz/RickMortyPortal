import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [CardService]
})

export class SearchComponent {
  characters: any[] = [];
  constructor(
    private location: Location,
    private _route: ActivatedRoute,
    private _router: Router,
    private _cardSevice: CardService
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      var search = params['name'];
      this._cardSevice.search(search).subscribe(
        response => {
          if (response) {
            this.characters = response.results
          } else {
            this.characters = [];
          }
        },
        error => {
          console.log(error);
        }
      );
    });
  }
}
