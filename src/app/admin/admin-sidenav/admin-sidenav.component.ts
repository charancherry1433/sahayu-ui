import { Component, EventEmitter, Output } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss']
})
export class AdminSidenavComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter()
  collapsed = false;
  screenWidth = 0;
  navData = [
    {
      label: 'Home',
      icon: 'fal fa-home',
      routeLink: '/admin'
    },
    {
      label: 'Users List',
      icon: 'fal fa-home',
      routeLink: '/admin/users-list'
    },
    {
      label: 'Users List',
      icon: 'fal fa-home',
      routeLink: '/admin/users-list'
    },
    {
      label: 'Users List',
      icon: 'fal fa-home',
      routeLink: '/admin/users-list'
    }
  ]

  toggleCollapse() {
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav() {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
}
