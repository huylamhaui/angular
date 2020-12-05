import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenusComponent } from './containers/menus/menus.component';
import { MenuTableComponent } from './components/menu-table/menu-table.component';
import { MenuDialogComponent } from './components/menu-dialog/menu-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MenusComponent, MenuTableComponent, MenuDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
