import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  url = environment.apiServiceUrl;

  constructor(private http: HttpClient) { }

  getGame(): Observable<Game> {
    return this.http.get<Game>(this.url + 'deck');
  }

  shuffleDeck(game: Game): Observable<Game> {
    const cards = [...game.clubsRow, ...game.spadesRow, ...game.diamondsRow, ...game.heartsRow]
    return this.http.put<Game>(this.url + 'deck', cards);
  }}
