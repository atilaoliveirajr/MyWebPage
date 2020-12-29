import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../template/main-nav/header.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  panelOpenState = false;

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Portfolio'
    }
  }

  ngOnInit(): void {
  }

}
