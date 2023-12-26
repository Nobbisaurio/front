import { Component, OnInit } from '@angular/core';
import {AuthService} from "@app/auth/servicies/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  displayModal: boolean = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  showModalDialog(){
    this.displayModal = true;

    
  }

  logout(){
    this.authService.logout();
  }

  // Función para obtener nuevos datos que deseas mostrar en el modal.
  getData() {
    // Ejemplo ficticio de función para obtener nuevos datos de alguna fuente.
    return { title: 'Nuevo Título', content: 'Nueva información' };
  }


}
