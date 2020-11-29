import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-type-form',
  templateUrl: './category-type-form.component.html',
  styleUrls: ['./category-type-form.component.scss']
})
export class CategoryTypeFormComponent implements OnInit {

  form: FormGroup;
  readonly FORM_ARRAY_NAME = 'categories';

  @Input() isSaving: boolean;
  @Output() submitForm = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    // this.addLine();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      code: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      [this.FORM_ARRAY_NAME]: this.formBuilder.array([])
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


  onSubmit(): void {
    const { invalid, value } = this.form;
    if (invalid) {
      alert('form not valid');
      return;
    }
    this.submitForm.emit(value);
  }
}
