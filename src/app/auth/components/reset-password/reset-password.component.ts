import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from "@app/auth/servicies/auth.service";
import { RootAppService } from '@app/shared/services/root-app.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  step = 0;
  token!: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    public rootAppService: RootAppService
  ) { }
  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
    this.route.queryParams
      .subscribe(params => {
        this.token = params["token"];
      }
      );
  }
  onSubmit() {
    this.authService.resetPassword(this.resetForm.value.newPassword, this.token).subscribe({
      next: () => {
        this.step = 1;
      },
      error: (error) => {
        console.log(error);
        this.step = 2;
      }
    });
  }

}
