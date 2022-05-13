import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  constructor(private getData:GetDataService, private router:Router) {
  }
  dataList = this.getData.list

  details() {
    this.router.navigateByUrl('/details');
  }

  ngOnInit(): void {
  }

}
