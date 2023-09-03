import { Component } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.css']
})
export class NgtemplateComponent {
  public myVar=true;
  public employees=[
    {name:"Ali",gender:"Male",age:25},
    {name:"Prem",gender:"Male",age:22},
    {name:"Sara",gender:"Female",age:21},
  ]
  

}
