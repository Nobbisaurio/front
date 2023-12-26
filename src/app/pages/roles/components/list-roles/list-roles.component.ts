import {Component, OnInit} from '@angular/core';
import {Role, RoleInfo} from '../../models/list-roles';
import {RolesService} from '../../service/roles.service';
import {ConfirmationService, LazyLoadEvent} from 'primeng/api';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from '@app/shared/services/toastr.service';
import {ListPermissions} from "@pages/permissions/models/list-permissions";
import {PermissionService} from "@pages/permissions/service/permission.service";

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.scss']
})
export class ListRolesComponent implements OnInit {
  loading: boolean = false;
  selected: Role | null = null;
  roles: Role [] = [];
  formRoles!: FormGroup;
  formSearch!: FormGroup;
  displayDetail: boolean = false;
  hasData: boolean = false;
  totalRecords: number = 0;
  rows: number = 10;
  permissions: ListPermissions[] = [];
  selectedPermissions: ListPermissions[] = [];

  constructor(
    private rolesService: RolesService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private permissionsService: PermissionService,
  ) {
  }

  ngOnInit(): void {

    this.formRoles = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(2)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      permissions: this.fb.array([])
    });

    this.formSearch = this.fb.group({
      identification: [''],
      name: [''],
      dateStart: [''],
    });
  }


  confirm(roles: Role) {
    this.confirmationService.confirm({
      message: `¿Está seguro de eliminar ${roles.name}?`,
      accept: () => {
        this.deleteRoles(roles);
      },
      acceptLabel: 'Si, Eliminar',
      rejectLabel: 'No, Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-primary'
    });
  }

  deleteRoles(channelDelete: Role) {
    this.rolesService
      .deleteRoles(channelDelete)
      .subscribe({
        next: () => {
          this.toastrService.showSuccess('Rol eliminado correctamente');
          this.roles = this.roles.filter((roles) => roles.id !== channelDelete.id);
        }
      });
  }

  search(pagination?:LazyLoadEvent) {
    const {identification, name, dateStart,} = this.formSearch.value;
    this.loading = true;
    this.rolesService.postListRoles( {
      identification,
      name,
      dateStart,
      page: pagination?.first ?? 0,
      limit: this.rows
    }).subscribe({
      next: (response) => {
        this.roles = response.results;
        this.totalRecords = response.total;
      },
      complete: () => {
        this.loading = false;
      }
    })
  }

  openModelCreate() {
    this.selectedPermissions = [];
    this.getPermissions();
    this.formRoles.reset();
    this.formRoles.enable();
    this.displayDetail = true;
    this.hasData = false;
  }

  openModalDetail(roles: Role) {
    this.getPermissions();
    this.getRoleById(roles.id)
    this.selected = roles;
    this.formRoles.patchValue({
      ...roles
    });
    this.formRoles.disable();
    this.displayDetail = true;
    this.hasData = true;
  }

  editRoles() {
    this.formRoles.enable();
    this.hasData = false;
  }

  cancelEdit() {
    this.formRoles.disable();
    this.hasData = true;
  }

  saveRoles() {
    const isUpdate = !!this.selected;
    if (!!this.selectedPermissions && this.selectedPermissions.length === 0) {
      this.toastrService.showError('Debe seleccionar al menos un permiso');
      return;
    }
    if (isUpdate) {
      const data: RoleInfo = {
        ...this.formRoles.value,
        permissions: this.selectedPermissions
      };
      this.rolesService
        .putUpdateRoles(data, this.selected!.id)
        .subscribe({
          next: () => {
            this.toastrService.showSuccess('Rol actualizado correctamente');
            this.search()
          }
        });
    } else {
      const data: RoleInfo = {
        ...this.formRoles.value,
        permissions: this.selectedPermissions
      };
      this.rolesService
        .postCreateRoles(data)
        .subscribe({
          next: () => {
            this.toastrService.showSuccess('Rol creado exitosamente');
            this.search()
            this.hiddenModalDetail();
          }
        });
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formRoles.controls;
  }

  hiddenModalDetail() {
    this.selected = null;
    this.displayDetail = false;
    this.hasData = false;
  }

  getPermissions() {
    this.permissionsService.getListPermission()
      .subscribe({
        next: (data) => {
          this.permissions = data;
        }
      })
  }

  getRoleById(id: number) {
    this.rolesService.getRole(id)
      .subscribe({
        next: (data) => {
          this.selectedPermissions = data.permissions;
          this.formRoles.patchValue({
            ...data
          });
        }
      })
  }
}
