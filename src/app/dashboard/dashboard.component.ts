// src/app/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1>Dashboard</h1>
    <nav>
      <ul>
        <li><a routerLink="admin">Admin Section</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class DashboardComponent {}
