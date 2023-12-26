import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from '@app/auth/servicies/auth.service';
import {distinctUntilChanged, map, Subscription, tap} from 'rxjs';

///directiva extructural
@Directive({
  selector: '[appShowForRoles]'
})
export class ShowForRolesDirective implements OnInit, OnDestroy{
  @Input('appShowForRoles') allowedRoles?: string[];
  private sub?: Subscription;

  constructor(
    private authService: AuthService,
    private viewContainerRef: ViewContainerRef,//nos permite obtener la referencia al contenedor
    private templateRef: TemplateRef<any>//nos permite obtener la referencia al ng template
  ) { }

  ngOnInit(): void {
    this.sub = this.authService.user$.pipe(
      map((user)=>Boolean(user && this.allowedRoles.includes(user.rol.code))),
      distinctUntilChanged(),
      tap((hasRole)=> hasRole
      ? this.viewContainerRef.createEmbeddedView(this.templateRef)
      : this.viewContainerRef.clear
      )
    ).subscribe();
  }
  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

}
