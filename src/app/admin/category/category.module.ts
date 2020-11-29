import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryTypePageComponent } from './containers/category-type-page/category-type-page.component';
import { CreateCategoryTypeComponent } from './containers/create-category-type/create-category-type.component';
import { CategoryTypeTableComponent } from './components/category-type-table/category-type-table.component';
import { CategoryTypeFormComponent } from './components/category-type-form/category-type-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CategoryTypePageComponent, CreateCategoryTypeComponent, CategoryTypeTableComponent, CategoryTypeFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
