import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-type-form',
  templateUrl: './category-type-form.component.html',
  styleUrls: ['./category-type-form.component.scss']
})
export class CategoryTypeFormComponent implements OnInit {

  form: FormGroup;
  readonly FORM_ARRAY_NAME = 'categories';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.addLine();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      code: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      [this.FORM_ARRAY_NAME]: this.formBuilder.array([], Validators.required)
    });
  }

  getLines(): FormArray {
    return this.form.get(this.FORM_ARRAY_NAME) as FormArray;
  }

  addLine(): void {
    const newLine: FormGroup = this.formBuilder.group({
      code: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl('')
    });
    this.getLines().push(newLine);
  }

}
