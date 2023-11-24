import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from './environment';

@Injectable()
export class CardService {
  public apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl
  }

  getCharacters(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getCharacter(characterId: any): Observable<any> {
    return this.http.get(this.apiUrl + '/' + characterId);
  }

  search(searchString: any): Observable<any> {
    return this.http.get(this.apiUrl + '?name=' + searchString);
  }
}
