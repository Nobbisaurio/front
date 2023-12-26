import { Component, NgZone, OnInit } from '@angular/core';
import { akitaDevtools, persistState } from '@datorama/akita';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig, private ngZone: NgZone) {
    akitaDevtools(ngZone);
    persistState();
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    };
  }
}
