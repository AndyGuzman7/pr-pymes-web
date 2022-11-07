import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class Email {
  public email!: string;
}


@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  public MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }

  get passwordMatchError() {
    return (
      this.updatePassForm.getError('mismatch') &&
      this.updatePassForm.get('confirmpassword')?.touched
    );
  }

  updatePassForm: FormGroup;

  error_messages = {

    'password': [
      { type: 'required', message: 'La contraseña es necesaria.' },
      { type: 'minlength', message: 'La contraseña debe tener un minimo de 6 caracteres.' },
      { type: 'maxlength', message: 'La contraseña no debe ser mayor a 30 caracteres.' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'La contraseña es necesaria.' },
      { type: 'minlength', message: 'La contraseña debe tener un minimo de 6 caracteres.' },
      { type: 'maxlength', message: 'La contraseña no debe ser mayor a 30 caracteres.' }
    ],
  }
  
  
  constructor(
    public formBuilder: FormBuilder
  ) {
    this.updatePassForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      
    }, 
    { 
      validators: [this.MatchValidator('password', 'confirmpassword')]
    });
  }

  onSubmit(form: any) {
    console.log(form.value);
  }

  ngOnInit(): void {
  }

  
  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
}
