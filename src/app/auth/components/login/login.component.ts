import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/servicies/auth.service';
import { ToastrService } from '@shared/services/toastr.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toastService: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  login() {
    if (this.loginForm.invalid) {
      this.toastService.showError(
        'Por favor, ingrese un correo electrónico y una contraseña válidos'
      );
      return;
    }
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        console.log('login success');
        this.loginForm.reset();
      },
    });
  }
}
