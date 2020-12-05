import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../menu.model';


@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {

  @Input() isLoading: boolean;
  @Input() menus: Menu[];
  @Input() lastAdded: string;

  displayedColumns: string[];

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = ['id', 'name', 'description'];
  }


  rowClass(id): any {
    return {
      'animate__animated animate__bounceInDown': id === this.lastAdded
    };
  }
}
