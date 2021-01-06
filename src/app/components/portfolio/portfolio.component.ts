import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../template/main-nav/header.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {
  panelOpenState = false;

  portfolioData = [{
    'title': 'Ring of Fire',
    'subtitle': 'Best game for your parties!',
    'backGroundImage': 'ringoffire',
    'playNow': true,
    'p': `This game was built with Angular 11.
    Github: XXXXX`,
    'angular': true,
    'javaScript': false
  },
  {
    'title': 'My Website',
    'subtitle': 'A nice way to learn Angular.',
    'backGroundImage': 'myphoto',
    'playNow': false,
    'p': `The entire site was built with Angular Material.
    Such components as: Sidenav, Button, Card, Expansion Panel and Toolbar.
    Github: XXXXX`,
    'angular': true,
    'javaScript': false
  },
  {
    'title': 'El Pollo Loco',
    'subtitle': 'Have 10min fun with this game!',
    'backGroundImage': 'elpolloloco',
    'playNow': true,
    'p': `This game was built with Canvas.
    Github: XXXXX`,
    'angular': false,
    'javaScript': true
  },
  {
    'title': 'Flappy Vogel',
    'subtitle': 'Almost as good as the original!',
    'backGroundImage': 'flappyVogel',
    'playNow': true,
    'p': `This game was built with JS OOP based.
    Github: XXXXX`,
    'angular': false,
    'javaScript': true
  }
]

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Portfolio'
    }
  }

  ngOnInit(): void {
  }

}
