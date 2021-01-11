import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../template/main-nav/header.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Imprint'
    }
  }

  ngOnInit(): void {
  }

}
