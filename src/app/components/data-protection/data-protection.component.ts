import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../template/main-nav/header.service';

@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.scss']
})
export class DataProtectionComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Data Protection'
    }
  }

  ngOnInit(): void {
  }

}
