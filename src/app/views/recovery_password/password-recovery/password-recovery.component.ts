import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

export class Email {
  public email!: string;
}

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {
  model = new Email();

  displayStyle = "none";
  
  constructor() { }
  onSubmit(form: any) {
    console.log(form.value);
  }

  ngOnInit(): void {
    FormsModule
  }

}
