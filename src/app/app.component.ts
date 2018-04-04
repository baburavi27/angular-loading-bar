import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Multi Select Dropdown';
  isRequesting: Boolean = true;
  optionsModel: number[];
  myOptions: IMultiSelectOption[];

  ngOnInit() {
    setTimeout(() => {
      this.isRequesting = false;
    }, 20000);

    this.myOptions = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
      { id: 4, name: 'Option 4' },
    ];
  }
 
 
  onChange() {
    console.log(this.optionsModel);
  }
}
