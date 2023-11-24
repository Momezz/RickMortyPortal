import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { environment } from 'src/app/services/environment';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  providers: [CardService]
})
export class SearchBarComponent implements OnInit {
  public apiUrl: string;
  public searchString: any;
  constructor(
    private _cardService: CardService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.apiUrl = environment.apiUrl
  }
  ngOnInit() {

  }

  goSearch() {
    this._router.navigate(['/search', this.searchString]);
  }
}
