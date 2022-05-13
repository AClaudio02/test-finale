import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IActivity } from 'src/app/models/IActivity';
import { GetDataService } from 'src/app/services/get-data.service';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  result!: IActivity;

  constructor(private formBuilder: FormBuilder,private getData:GetDataService,private router:Router) {}

  activityForm = this.formBuilder.group({
    type: ['',Validators.required],
    partecipants: ['',Validators.required],
    price: ['', Validators.required],
  })
  submit(): void {
    this.getData.getData(this.activityForm.value.type,this.activityForm.value.partecipants,this.activityForm.value.price).subscribe((data: any) => this.result = data)
    if (this.result === undefined || this.result.error){
      console.error('Non esiste alcuna attività con questi parametri!');
    } else {
      this.router.navigateByUrl('/data');
      this.getData.list.push(this.result)
      console.log(this.result)
    }
  }
  ngOnInit(): void {
  }

}
