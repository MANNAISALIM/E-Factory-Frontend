import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-orange', class: '' },
    { path: '/employe', title: 'Employees',  icon:'ni-circle-08 text-red', class: '' },
    { path: '/command', title: 'Commands',  icon:'ni-ruler-pencil text-blue', class: '' },
    { path: '/vehicle', title: 'Vehicles',  icon:'ni-delivery-fast text-yellow', class: '' },
    { path: '/product', title: 'Products',  icon:'ni-cart text-orange', class: '' },
    { path: '/client', title: 'Clients',  icon:'ni-satisfied text-primary', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
