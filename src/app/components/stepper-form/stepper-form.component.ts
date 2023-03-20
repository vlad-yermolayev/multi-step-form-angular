import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataFormService } from 'src/app/services/data-form.service';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.scss']
})
export class StepperFormComponent implements OnInit {
  public step: number = 1;
  public form: FormGroup;
  constructor(
    private router: Router,
    private _dataFormService: DataFormService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      userName: new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required])
      }),
      userContacts: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        phoneNumber: new FormControl('', [Validators.required])
      }),
      userAddress: new FormGroup({
        address: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required])
      }),
    })
  }

  goBack() {
    this.step = this.step - 1;
  }

  goNext() {
    if (this.form.get('userName')?.invalid && this.step === 1) {
      return;
    }
    if (this.form.get('userContacts')?.invalid && this.step === 2) {
      return;
    }
    this.step = this.step + 1;
  }

  onSubmit() {
    if (this.step === 3) {
      this._dataFormService.getData(this.form.value);
      this.router.navigate(['/result']);
    }
  }

  isFieldValid(name: string) {
    return (
      !this.form.get(name)?.valid && this.form.get(name)?.touched
    );
  }
}
