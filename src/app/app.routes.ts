import { Routes } from '@angular/router';
import {
  adminGuard,
  authCanMatchGuard,
  authGuard,
  formGuard,
  productResolver,
} from './guards';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    canActivate: [authGuard],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    canMatch: [authCanMatchGuard],
    canActivateChild: [adminGuard], // Protect all child routes with adminGuard
    children: [
      {
        path: 'admin',
        loadComponent: () =>
          import('./admin/admin.component').then((m) => m.AdminComponent),
      },
    ],
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/form.component').then((m) => m.FormComponent),
    canActivate: [authGuard],
    canDeactivate: [formGuard],
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./product-details/product-details.component').then(
        (m) => m.ProductDetailsComponent
      ),
    canActivate: [authGuard],
    resolve: { product: productResolver },
  },
];
