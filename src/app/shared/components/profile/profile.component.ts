import { Component, OnInit } from '@angular/core';
import { UserAuth } from '@core/models/user-auth';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../../../auth/servicies/auth.service';
import { ToastrService } from '@app/shared/services/toastr.service';
import { UsersService } from '@app/pages/users/service/users.service';
import { RootAppService } from '@app/shared/services/root-app.service';
import { LocalStorageService } from '../../../core/storage/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  idStudent!: number;
  displayModal: boolean;
  profileForm!: FormGroup;
  isEditing: boolean = false;
  isChangePassword: boolean = false;
  user!: UserAuth;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private UsersService: UsersService,
    private toastrService: ToastrService,
    public rootAppService: RootAppService,
    private navbarComponent: NavbarComponent,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.currentUserValue!;
    this.profileForm = this.formBuilder.group({
      id: this.user.id,
      userName: this.user.userName,
    });
  }

  saveProfile() {
    this.UsersService.patchUpdateById(this.profileForm.value).subscribe(
      (data) => {
        this.toastrService.showSuccess('Usuario actualizado exitosamente!');
        this.navbarComponent.displayModal = false;
        this.user.userName = this.profileForm.get('userName').value;
        this.localStorageService.setItem('currentUser', this.user);
      }
    );

    this.isEditing = false;
    this.isChangePassword = false;
  }

  editProfile() {
    this.isEditing = true;
  }

  hidden() {
    this.isChangePassword = false;
    this.isEditing = false;
    this.navbarComponent.displayModal = false;
  }

  changePasswordform() {
    this.isChangePassword = true;
  }
}
