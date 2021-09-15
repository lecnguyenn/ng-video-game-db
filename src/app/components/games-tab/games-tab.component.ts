import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models';

@Component({
  selector: 'app-games-tab',
  templateUrl: './games-tab.component.html',
  styleUrls: ['./games-tab.component.scss']
})
export class GamesTabComponent implements OnInit {

  @Input() game: Game;
  constructor() { }

  ngOnInit(): void {
  }

}
