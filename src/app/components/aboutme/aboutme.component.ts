import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../template/main-nav/header.service';
/* import { skills } from '../../../assets/data/skills'; */

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutMe.component.html',
  styleUrls: ['./aboutMe.component.scss']
})
export class AboutmeComponent implements OnInit {
  /* skills = skills; */

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

  constructor(private headerService: HeaderService ) { 
    headerService.headerData = {
      title: 'About me'
    }
  }

  ngOnInit(): void {
  }

}
