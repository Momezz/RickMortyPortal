import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
  providers: [CardService]
})
export class CharacterDetailComponent implements OnInit {
  public character: any;
  constructor(
    private location: Location,
    private _cardService: CardService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._cardService.getCharacter(id).subscribe(
        response => {
          if (response) {
            this.character = response
          } else {
            this._router.navigate(['/']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/']);
        }
      )
    });
  }
}
