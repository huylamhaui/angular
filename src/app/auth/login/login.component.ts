import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from '../store/auth.action';
import { getAuthError, getIsLoginIn } from '../store/auth.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  error$: Observable<any>;
  isLoggingIn$: Observable<boolean>;


  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.buildForm();

    this.isLoggingIn$ = this.store.pipe(select(getIsLoginIn));
    this.error$ = this.store.pipe(select(getAuthError));
  }


  buildForm(): void {
    this.form = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login(): void {
    const { valid, value } = this.form;
    if (valid) {
      this.store.dispatch(login({ payload: value }));
    } else {
      alert('form invalid');
    }
  }

}
