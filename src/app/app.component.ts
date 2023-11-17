import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'my-first-project';
	myName = 'Surya Pratap Singh and Harsh Rajput';
	myAge() {
		return 19;
	}
	showMyName(myName: any) {
		alert(myName);
	}
	getInputFieldValue(inputFieldValue: string) {
		console.log(inputFieldValue);
	}
	disable = false;
	show = 'yes';
	color = 'green';
	users = ['Surya', 'Harsh', 'Rajput'];
	text_color = 'red';
	changeTextColour() {
		if(this.text_color == 'red') {
			this.text_color = 'blue';
		}
		else {
			this.text_color = 'red';
		}
	}
	form_data:any ={};
	getData(data:NgForm) {
		console.log(data);
		this.form_data = data;
	}
	data_for_child = 'Hello from parent';
	data_from_parent(data:string){
		console.log(data);
	}
	two_way_binding:any;
	
}
