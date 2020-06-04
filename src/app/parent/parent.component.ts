import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(public data : DataService) { }

  day = 0;
  plans = []
  plan={
    do:[],
    done:[]
  }

  ngOnInit() {
    this.plans =  this.data.get_plans()
  }

  set_day(i)
  {
    //console.log(i)
    if(this.day==i)i=0;
      this.day = i;
      //console.log(this.day)
      this.data.set_day(i);
  }

  add_day()
  {
    this.data.add_day();
    //console.log(this.plans)
  }

}
