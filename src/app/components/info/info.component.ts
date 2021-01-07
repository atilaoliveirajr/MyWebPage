import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  labelsArray = [
    {
      'icon': 'engineering',
      'title': 'My journey began',
      'description': 'as a product manager in an industrial company. Early on, I got the chance to collaborate in multiple IT and digitalization projects.',
    },
    {
      'icon': 'favorite',
      'title': 'I fell in love with tech',
      'description': 'realizing its huge potential to achieve significant progress & to create innovation.'
    },
    {
      'icon': 'devices',
      'title': 'Aspiring to create solutions myself',
      'description': 'instead of just handling the business-part, I was longing for a deep dive into the tech-sphere.'
    },
    {
      'icon': 'airplanemode_active',
      'title': 'Finally, I followed my dream',
      'description': 'and quit my job to learn Front-End Development in a professional software development school.'
    }
  ]

  skillsArray = [
    {
      'name': 'JavaScript',
      'level': '90'
    },
    {
      'name': 'Angular',
      'level': '90'
    },
    {
      'name': 'SCSS/HTML',
      'level': '90'
    },
    {
      'name': 'Git',
      'level': '60'
    },
    {
      'name': 'Java',
      'level': '40'
    },
    {
      'name': 'Springboot',
      'level': '40'
    }
    ,
    {
      'name': 'MySQL',
      'level': '30'
    }
  ]

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

navDataArray = [
  {
    'icon': 'home',
    'page': 'Home',
    'routerLink': "./",
    'class': ""
  },
  {
    'icon': 'web',
    'page': 'Portfolio',
    'routerLink': "./portfolio",
    'class': ""
  },
  {
    'icon': 'person_search',
    'page': 'About me',
    'routerLink': "./aboutme",
    'class': "" 
  },
  {
    'icon': 'person_add',
    'page': 'Contact me',
    'routerLink': ".",
    'class': ""
  },
  {
    'icon': 'picture_as_pdf',
    'page': 'Resume',
    'routerLink': ".",
    'class': "lastChild"
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
