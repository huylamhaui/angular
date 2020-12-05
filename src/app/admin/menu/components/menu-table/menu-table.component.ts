import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Page } from 'src/app/shared/models/api.model';
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
  @Input() pagination: Page<any>;

  @Output() changePage = new EventEmitter<any>();

  displayedColumns: string[];

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = ['id', 'name', 'description'];
  }

  pageChange($event: PageEvent): void {
    const { pageIndex, pageSize } = $event;
    const query = {
      pageSize,
      pageNumber: pageIndex
    };
    this.changePage.emit(query);
  }


  rowClass(id): any {
    return {
      'animate__animated animate__bounceInDown': id === this.lastAdded
    };
  }
}
