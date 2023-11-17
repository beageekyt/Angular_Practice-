import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent {
    @ Input( ) data_for_child = '';
    @ Output() data_for_parent = new EventEmitter<string>();
}
