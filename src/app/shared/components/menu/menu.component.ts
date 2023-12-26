import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from "@app/auth/servicies/auth.service";
import { RootAppService } from "@shared/services/root-app.service";
import { rolEnum } from '@app/core/enum/rol.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items!: MenuItem[];
  menuComplete!: any[];
  userCharge!: string;

  constructor(
    private authService: AuthService,
    private rootAuthService: RootAppService
  ) {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Menu',
        items: []
      }
    ];
    this.menuByRol();
  }

  menuByRol(): void {
    this.userCharge = this.authService.currentUserValue!.rol!.code;
    this.menuComplete = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: [this.rootAuthService.dashboardPath],
        routerLinkActiveOptions: { exact: true },
        roles: [rolEnum.ADMIN, rolEnum.CA, rolEnum.CE, rolEnum.TA, rolEnum.TE]
      },
      {
        label: 'Estudiantes',
        icon: 'pi pi-fw pi-users',
        routerLink: [this.rootAuthService.studentsPath],
        routerLinkActiveOptions: { exact: true },
        routerLinkActive: 'active',
        roles: [rolEnum.ADMIN, rolEnum.CA, rolEnum.CE, rolEnum.TA, rolEnum.TE],
        items: [
          {
            label: 'Listado',
            icon: 'pi pi-fw pi-list',
            routerLink: [this.rootAuthService.studentsPath],
          },
          {
            label: 'Asignación',
            icon: 'pi pi-fw pi-plus',
            routerLink: [this.rootAuthService.studentsAssigmentPath],
          }
        ]
      },
      {
        label: 'Empresas',
        icon: 'pi pi-fw pi-shopping-bag',
        routerLink: [this.rootAuthService.companyPath],
        routerLinkActiveOptions: { exact: true },
        roles: [rolEnum.CA]
      },
      {
        label: 'Tutores',
        icon: 'pi pi-fw pi-users',
        routerLink: [this.rootAuthService.tutorPath],
        routerLinkActiveOptions: { exact: true },
        roles: [rolEnum.CA, rolEnum.CE]
      },
      {
        label: 'Carreras',
        icon: 'pi pi-fw pi-book',
        routerLink: [this.rootAuthService.careerPath],
        routerLinkActiveOptions: { exact: true },
        roles: [rolEnum.ADMIN]
      },
      {
        label: 'Proyectos',
        icon: 'pi pi-fw pi-book',
        routerLink: [this.rootAuthService.projectsPath],
        routerLinkActiveOptions: { exact: true },
        roles: [rolEnum.CA, rolEnum.CE, rolEnum.TA, rolEnum.TE]
      },
      {
        label: 'Reportes',
        icon: 'pi pi-fw pi-download',
        routerLink: [this.rootAuthService.reportsPath],
        routerLinkActiveOptions: { exact: true },
        roles: [rolEnum.CA, rolEnum.TA]
      },
      {
        label: 'Convenios',
        icon: 'pi pi-fw pi-check-circle',
        routerLink: [this.rootAuthService.agreementPath],
        routerLinkActiveOptions: { exact: true },
        roles: [rolEnum.CA]
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-users',
        routerLink: [this.rootAuthService.usersPath],
        routerLinkActiveOptions: { exact: true },
        roles: [rolEnum.ADMIN]
      },
      {
        label: 'Permisos',
        icon: 'pi pi-fw pi-lock-open',
        routerLink: [this.rootAuthService.permissionPath],
        routerLinkActiveOptions: { exact: true },
        roles: [rolEnum.ADMIN]
      },
      {
        label: 'Roles',
        icon: 'pi pi-fw pi-cog',
        routerLink: [this.rootAuthService.rolePath],
        routerLinkActiveOptions: { exact: true },
        roles: [rolEnum.ADMIN]
      },

    ];
    this.menuComplete.forEach((item) => {
      if (item!.roles.includes(this.userCharge)) {
        this.items[0].items?.push(item)
      }
    });
  }


}




