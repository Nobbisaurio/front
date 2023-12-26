import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@app/auth/servicies/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  resetForm!: FormGroup;
  constructor(
    private authService: AuthService,
  ){


  }
  ngOnInit(): void {

      this.resetForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email])
      });
  }
  onSubmit() {
    if (this.resetForm.valid) {
      const email = this.resetForm.value.email;
      this.authService.forgotPassword(email).subscribe(
        () => {
          this.resetForm.reset();
        }
      );
    }
  }

}
