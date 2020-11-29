import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryTypePageComponent } from './containers/category-type-page/category-type-page.component';
import { CreateCategoryTypeComponent } from './containers/create-category-type/create-category-type.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryTypePageComponent
  },
  {
    path: 'create',
    component: CreateCategoryTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
