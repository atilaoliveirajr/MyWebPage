import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../template/main-nav/header.service';
import { labelsArray, skillsArray } from 'src/app/utils/constants';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutMe.component.html',
  styleUrls: ['./aboutMe.component.scss']
})
export class AboutmeComponent implements OnInit {
  labelsArray = labelsArray;
  skillsArray = skillsArray;

  constructor(private headerService: HeaderService ) { 
    headerService.headerData = {
      title: 'About me'
    }
  }

  ngOnInit(): void {
  }

}
