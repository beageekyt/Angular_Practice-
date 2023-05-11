import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  myName = 'Surya Pratap Singh and Harsh Rajput';
  myAge(){
    return 19;
  }
  showMyName(myName:any){
    alert(myName);
  }
  getInputFieldValue(inputFieldValue:string){
    console.log(inputFieldValue);
  }
  disable = false;
  show = 'yes';
  color = 'green';
}
