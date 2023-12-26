import { UserAuth } from '@core/models/user-auth';
import { AuthService } from '../../servicies/auth.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { ToastrService } from '@app/shared/services/toastr.service';
import { NavbarComponent } from '@app/shared/components/navbar/navbar.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class PasswordChangeComponent implements OnInit {
  idStudent!: number;
  user!: UserAuth;

  passwordForm!: FormGroup;
  displayDetail = false;
  hasData: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private navbarComponent: NavbarComponent,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.currentUserValue!;
    this.passwordForm = this.formBuilder.group({
      email: this.user.email,

      currentPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        //Validators.pattern('^(?=.*[A-Z]).*$'),
      ]),
      newPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        //Validators.pattern('^(?=.*[A-Z]).*$'),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        //Validators.pattern('^(?=.*[A-Z]).*$'),
      ]),
    });
  }


  saveFormPassword() {
    if (this.passwordForm.valid) {
      const { email, newPassword, currentPassword } = this.passwordForm.value;
      this.authService
        .changePassword(email, currentPassword, newPassword)
        .subscribe((data) => {
          this.toastrService.showSuccess(
            'Contraseña actualizada exitosamente!'
          );
          this.navbarComponent.displayModal = false;
        });
    }
  }
}
