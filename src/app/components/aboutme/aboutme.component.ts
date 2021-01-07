import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../template/main-nav/header.service';
import { InfoComponent } from '../info/info.component'

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutMe.component.html',
  styleUrls: ['./aboutMe.component.scss']
})
export class AboutmeComponent implements OnInit {

  info = new InfoComponent;
  labelsArray = this.info.labelsArray;
  skillsArray = this.info.skillsArray;

  constructor(private headerService: HeaderService ) { 
    headerService.headerData = {
      title: 'About me'
    }
  }

  ngOnInit(): void {
  }

}
