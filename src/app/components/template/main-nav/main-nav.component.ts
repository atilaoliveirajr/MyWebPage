import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { HeaderService } from '../../../services/header-service/header.service';
import { navDataArray, navIconArray } from 'src/app/utils/constants';
import { MatDialog } from '@angular/material/dialog';
import { DialogDownloadConfimationComponent } from '../../dialog-download-confimation/dialog-download-confimation.component';


@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  mobileQuery: MediaQueryList;

  navIconArray = navIconArray;
  navDataArray = navDataArray;

  private _mobileQueryListener: () => void;
  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private headerService: HeaderService, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogDownloadConfimationComponent);
  }

  get title(): string {
    return this.headerService.headerData.title;
  }
}
