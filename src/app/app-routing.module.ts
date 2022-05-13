import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityDetailsComponent } from './components/activity-details/activity-details.component';
import { ActivityComponent } from './components/activity/activity.component';
import { DataListComponent } from './components/data-list/data-list.component';

const routes: Routes = [
    {path:'activity', component:ActivityComponent},
    {path:'', redirectTo:'activity',pathMatch:'full'},
    {path:'data',component:DataListComponent},
    {path:'details', component:ActivityDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }