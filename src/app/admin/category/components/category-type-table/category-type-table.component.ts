import { Component, Input, OnInit } from '@angular/core';
import { CategoryType } from '../../category.model';

@Component({
  selector: 'app-category-type-table',
  templateUrl: './category-type-table.component.html',
  styleUrls: ['./category-type-table.component.scss']
})
export class CategoryTypeTableComponent implements OnInit {

  @Input() categoryTypeList: CategoryType[];
  @Input() isLoading: boolean;

  displayedColumns = ['code', 'name', 'description'];

  constructor() { }

  ngOnInit(): void {
  }

}
