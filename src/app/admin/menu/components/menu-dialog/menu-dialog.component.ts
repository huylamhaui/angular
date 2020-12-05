import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getIsSaving } from 'src/app/admin/category/store/category.selector';
import { createMenu } from '../../store/menu.action';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss']
})
export class MenuDialogComponent implements OnInit {

  form: FormGroup;
  error$: Observable<any>;
  isSaving$: Observable<boolean>;

  constructor(
    private store: Store, private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) dialogData
  ) {
    const { error$, isSaving$ } = dialogData;
    this.error$ = error$;
    this.isSaving$ = isSaving$;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  submitForm(): void {
    const { valid, value } = this.form;
    if (valid) {


      this.store.dispatch(createMenu({ payload: value }));
    } else {
      alert('form invalid');
    }
  }

  getErrorMessage(error): string {
    if (!error) {
      return null;
    }
    return error.message;
  }

}
