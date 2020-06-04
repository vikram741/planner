import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../services/data.service'
@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {

  @Input() day_task:any;
  @Input() day_value:number;

  constructor(private data : DataService) { }

  day = 0;
  task = ""
  plan =[]
  ngOnInit() {
  }

  add_task()
  {
      if(this.task!="")
      {
        //console.log(this.task)
        this.data.add_task(this.task,this.day_value);
        this.task="";
      }
  }
  do_task(i)
  {
    this.day_task[i].status = true;
  }
  undo_task(i)
  {
    this.day_task[i].status = false;
  }
  del(i)
  {
    this.day_task.splice(i,1)
  }

}
