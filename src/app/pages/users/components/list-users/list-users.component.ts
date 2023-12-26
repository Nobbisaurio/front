import {Component, OnInit} from '@angular/core';
import {ListUsers} from '../../models/list-users';
import {UsersService} from '../../service/users.service';
import {ConfirmationService, LazyLoadEvent} from 'primeng/api';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from '@app/shared/services/toastr.service';
import {RolesService} from '@app/pages/roles/service/roles.service';
import {Role} from '@app/pages/roles/models/list-roles';
import {CreateUsers} from '../../models/create-users';
import {CareerService} from '@app/pages/career/service/career.service';
import {AuthService} from '@app/auth/servicies/auth.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  loading: boolean = false;
  selected: ListUsers | null = null;
  users: ListUsers [] = [];
  totalRecords: number = 0;
  rows: number = 10;
  formUsers!: FormGroup;
  formSearch!: FormGroup;
  displayDetail: boolean = false;
  hasData: boolean = false;
  roles: Role [] = [];
  disabled: boolean = true;

  constructor(
    private usersService: UsersService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private rolesService: RolesService,
    private careerService: CareerService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {

    this.formUsers = this.fb.group({
      dni: ['', [Validators.required, Validators.minLength(10)]],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      idRol: ['', [Validators.required]],
    });

    this.formSearch = this.fb.group({
      identification: [''],
      name: ['',],
      email: ['', [Validators.email]],
    });
  }

  confirm(users: ListUsers) {
    this.confirmationService.confirm({
      message: `¿Está seguro de eliminar ${users.userName}?`,
      accept: () => {
        this.deleteUsers(users);
      },
      acceptLabel: 'Si, Eliminar',
      rejectLabel: 'No, Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-primary'
    });
  }

  deleteUsers(channelDelete: ListUsers) {
    this.usersService
      .deleteUsers(channelDelete)
      .subscribe({
        next: () => {
          this.toastrService.showSuccess('Usuario eliminado correctamente');
          this.users = this.users.filter((users) => users.id !== channelDelete.id);
        }
      });
  }

  search(pagination?: LazyLoadEvent) {
    const idCareer = this.authService.career.id;
    const {identification, name, email} = this.formSearch.value;
    this.loading = true;
    this.usersService.getListUsers(idCareer, {
      email,
      identification,
      name,
      page: pagination?.first ?? 0,
      limit: this.rows
    }).subscribe({
      next: (response) => {
        this.users = response.results;
        this.totalRecords = response.total;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    })
  }

  openModelCreate() {
    this.formUsers.reset();
    this.getRoles();
    this.formUsers.enable();
    this.displayDetail = true;
    this.hasData = false;
  }

  openModalDetail(users: ListUsers) {
    this.selected = users;
    this.getRoles();
    this.formUsers.patchValue({
      ...users
    });
    this.formUsers.disable();
    this.displayDetail = true;
    this.hasData = true;
  }

  editUsers() {
    this.formUsers.enable();
    this.formUsers.controls['dni'].disable();
    this.formUsers.controls['email'].disable();
    this.hasData = false;
  }

  cancelEdit() {
    this.formUsers.disable();
    this.hasData = true;
  }

  saveUsers() {
    const isUpdate = !!this.selected;
    if (isUpdate) {
      const data: ListUsers = {
        id: this.selected!.id,
        ...this.formUsers.value
      };
      this.usersService
        .putUpdateUsers(data)
        .subscribe({
          next: () => {
            this.toastrService.showSuccess('Usuario actualizado correctamente');
            const rootIndex = this.users.findIndex((root) => root.id === this.selected!.id);
            this.users[rootIndex] = {
              id: this.selected!.id,
              userName: this.f['userName'].value,
              dni: this.selected!.dni,
              typeDni: this.selected!.typeDni,
              role: this.roles.find((role) => role.id === this.f['idRol'].value)!.name,
              email: this.selected!.email,
            };
            this.hiddenModalDetail();
          }
        });
    } else {
      const data: CreateUsers = {
        ...this.formUsers.value,
        password: this.f['dni'].value,
      };
      this.usersService
        .postCreateUsers(data)
        .subscribe({
          next: (data) => {
            this.toastrService.showSuccess('Usuario creado exitosamente');

            this.search({first: 0, rows: this.rows});
            this.hiddenModalDetail();
          }
        });
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formUsers.controls;
  }

  hiddenModalDetail() {
    this.selected = null;
    this.displayDetail = false;
    this.hasData = false;
  }


  getRoles() {
    this.rolesService.postListRoles({page: 0, limit: 100})
      .subscribe({
        next: (data) => {
          this.roles = data.results;
        },
      })

  }

}
