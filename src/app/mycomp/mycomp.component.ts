import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']

})
export class MycompComponent implements OnInit {
  public arrayStrs:string[] = ['one', 'two', 'three'];
  
  constructor() { 
    
   }

  ngOnInit() {

  }

}
