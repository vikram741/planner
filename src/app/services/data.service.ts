import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  plans = [[]]
  day = 0;
  constructor() { }
  get_day()
  {
    return this.day;
  }
  getaplan(i)
  {
    return this.plans[i-1]
  }
  add_task(t,d)
  {
    //console.log(t,d)
      let p = {title:t,status:false}
      //console.log(this.plans[d-1])
      this.plans[d-1].push(p)
      //console.log(this.plans[d-1])
  }


  set_day(i)
  {
    this.day  = i;
    //console.log(this.day);
  }
  add_day()
  {
    this.plans.push(new Array());
    //console.log('done')
  }
  get_plans()
  {
    return this.plans;
  }
}
