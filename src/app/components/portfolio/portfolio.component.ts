import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../template/main-nav/header.service';
import { InfoComponent } from '../info/info.component'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {
  info = new InfoComponent;
  portfolioData = this.info.portfolioData;

  panelOpenState = false;

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Portfolio'
    }
  }

  ngOnInit(): void {
  }

}
