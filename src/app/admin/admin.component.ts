// src/app/admin/admin.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule], 
  template: `<h1>Admin</h1><p>Protected by CanActivateChild Guard</p>`,
})
export class AdminComponent {}
