import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { StoreModule } from '@ngrx/store';
import { adminReducer } from './admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { adminEffect } from './admin.effect';


@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature('adminStore', adminReducer),
    EffectsModule.forFeature(adminEffect)
  ]
})
export class AdminModule { }
