// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <h1>Angular Guards Demo</h1>

    <button (click)="loginAsUser()">Login as User</button>
    <button (click)="loginAsAdmin()">Login as Admin</button>
    <button (click)="logout()">Logout</button>

    <p>{{ authStatus }}</p>

    <nav>
      <ul>
        <li><a routerLink="/">Home (Protected by CanActivate)</a></li>
        <li><a routerLink="/dashboard">Dashboard (Protected by CanMatch)</a></li>
        <li><a routerLink="/dashboard/admin">Admin Section (Protected by CanActivateChild)</a></li>
        <li><a routerLink="/form">Form (Protected by CanDeactivate)</a></li>
        <li><a routerLink="/product/1">Product (Protected by Resolve)</a></li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  authStatus = '';

  constructor(private authService: AuthService) {
    this.updateAuthStatus();  // Initialize auth status on load
  }

  loginAsUser() {
    this.authService.loginAsUser();
    this.updateAuthStatus();
  }

  loginAsAdmin() {
    this.authService.loginAsAdmin();
    this.updateAuthStatus();
  }

  logout() {
    this.authService.logout();
    this.updateAuthStatus();
  }

  updateAuthStatus() {
    if (this.authService.isAuthenticated()) {
      this.authStatus = this.authService.hasAdminRole() ? 'Logged in as Admin' : 'Logged in as User';
    } else {
      this.authStatus = 'Not Logged in';
    }
  }
}