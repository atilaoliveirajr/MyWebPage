import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../template/main-nav/header.service';
import { portfolioArray } from 'src/app/utils/constants';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {
  portfolioData = portfolioArray;

  panelOpenState = false;

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Portfolio'
    }
  }

  ngOnInit(): void {
  }

}
