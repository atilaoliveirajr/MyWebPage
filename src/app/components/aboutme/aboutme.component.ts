import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header-service/header.service';
import { labelsArray, skillsArray, photoPlusQuote } from 'src/app/utils/constants';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutMe.component.html',
  styleUrls: ['./aboutMe.component.scss']
})
export class AboutmeComponent implements OnInit {
  labelsArray = labelsArray;
  skillsArray = skillsArray;
  photoPlusQuote = photoPlusQuote;

  currentQuote: number = 0;

  constructor(private headerService: HeaderService ) { 
    headerService.headerData = {
      title: 'About me'
    }
  }

  ngOnInit(): void {
    this.updateMyPresentation();
  }

  ngOnChange() : void {
    
  }

  updateMyPresentation() {
    setInterval(() => {
      if (this.currentQuote == 0) {
        this.currentQuote++;
      } else {
        this.currentQuote = 0;
      }
    }, 7000);
  }
}
