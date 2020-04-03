import { Component, OnInit } from '@angular/core';
import { GameService } from './services/game.service';
import { Game } from './models/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  game: Game;
  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.getGame().subscribe(x => {
      this.game = x;
    });
  }

  shuffleDeck(game: Game) {
      this.gameService.shuffleDeck(this.game).subscribe(game => {
        this.game = game;
      });
  }

  convertToEmoji(string:string) {
    return string.replace(/Q/g,'👸').replace(/K/g, '👑').replace(/C/g, '♣').replace(/H/g, '❤️').replace(/D/g, '♦️').replace(/S/g, '♠');
  }
}
