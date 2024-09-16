// src/app/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Home</h1><p>Protected by CanActivate Guard</p>`,
})
export class HomeComponent {}
