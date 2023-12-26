import {Component, OnInit} from '@angular/core';
import {ListPermissions} from '../../models/list-permissions';
import {PermissionService} from '../../service/permission.service';
import {ConfirmationService} from 'primeng/api';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from '@app/shared/services/toastr.service';

@Component({
  selector: 'app-list-permissions',
  templateUrl: './list-permissions.component.html',
  styleUrls: ['./list-permissions.component.scss']
})
export class ListPermissionsComponent implements OnInit {
  loading: boolean = false;
  selected: ListPermissions | null = null;
  permission: ListPermissions [] = [];
  formPermission!: FormGroup;
  displayDetail: boolean = false;
  hasData: boolean = false;

  constructor(
    private permissionService: PermissionService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
    private toastrService: ToastrService) {
  }

  ngOnInit(): void {

    this.getPermission();

    this.formPermission = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      endpoint: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  confirm(permission: ListPermissions) {
    this.confirmationService.confirm({
      message: `¿Está seguro de eliminar ${permission.name}?`,
      accept: () => {
        this.deletePermission(permission);
      },
      acceptLabel: 'Si, Eliminar',
      rejectLabel: 'No, Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-primary'
    });
  }

  deletePermission(channelDelete: ListPermissions) {
    this.permissionService
      .deletePermission(channelDelete)
      .subscribe({
        next: () => {
          this.toastrService.showSuccess('Permiso eliminado correctamente');
          this.permission = this.permission.filter((permission) => permission.id !== channelDelete.id);
        }
      });
  }

  openModelCreate() {
    this.formPermission.reset();
    this.formPermission.enable();
    this.displayDetail = true;
    this.hasData = false;
  }

  openModalDetail(permission: ListPermissions) {
    this.selected = permission;
    this.formPermission.patchValue({
      ...permission
    });
    this.formPermission.disable();
    this.displayDetail = true;
    this.hasData = true;
  }

  editPermission() {
    this.formPermission.enable();
    this.hasData = false;
  }

  cancelEdit() {
    this.formPermission.disable();
    this.hasData = true;
  }

  savePermission() {
    const isUpdate = !!this.selected;
    if (isUpdate) {
      const data: ListPermissions = {
        id: this.selected!.id,
        ...this.formPermission.value
      };
      this.permissionService
        .putUpdatePermission(data)
        .subscribe({
          next: (res) => {
            this.toastrService.showSuccess('Permiso actualizado correctamente');
            const rootIndex = this.permission.findIndex((root) => root.id === this.selected!.id);
            this.permission[rootIndex] = data;
            this.hiddenModalDetail();
          }
        });
    } else {
      const dataToSend: ListPermissions = {
        ...this.formPermission.value,
      };
      this.permissionService
        .postCreatePermission(dataToSend)
        .subscribe({
          next: (data) => {
            this.toastrService.showSuccess('Permiso creado exitosamente');
            this.getPermission();
            this.hiddenModalDetail();
          }
        });
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formPermission.controls;
  }

  hiddenModalDetail() {
    this.selected = null;
    this.displayDetail = false;
    this.hasData = false;
  }

  getPermission() {
    this.loading = true
    this.permissionService.getListPermission()
      .subscribe({
        next: (data) => {
          this.permission = data;
          this.loading = false;
        }, error: (err) => {
          this.loading = false;
        }
      })

  }

}
