import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IActivity } from '../models/IActivity';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  list: IActivity[] = [];
  data!:Observable<any>;

  constructor(private httpClient: HttpClient) { }
  getData(type:string,partecipants:number,price:number):Observable<IActivity> {
    this.data = this.httpClient.get(`http://www.boredapi.com/api/activity?type=${type}&partecipants=${partecipants}&price=${price}`);
    return this.data
  }
}
