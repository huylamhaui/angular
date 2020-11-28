import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryTypePageComponent } from './containers/category-type-page/category-type-page.component';
import { CreateCategoryTypeComponent } from './containers/create-category-type/create-category-type.component';


@NgModule({
  declarations: [CategoryTypePageComponent, CreateCategoryTypeComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
