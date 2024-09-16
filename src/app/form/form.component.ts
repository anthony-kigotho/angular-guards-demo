// src/app/form/form.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1>Contact Form</h1>
    <form #contactForm="ngForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" [(ngModel)]="name" name="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" [(ngModel)]="email" name="email" required />
      </div>
      <button (click)="submitForm()">Submit</button>
    </form>
    <p *ngIf="submitted">Form submitted! Thank you, {{ name }}.</p>
  `,
  styles: [
    `
      form div {
        margin-bottom: 10px;
      }
      input {
        padding: 5px;
        font-size: 14px;
      }
      button {
        padding: 8px 12px;
        font-size: 14px;
      }
    `,
  ],

})
export class FormComponent {
  name: string = '';
  email: string = '';
  submitted = false;
  formSaved = false; // Used to track whether the form is saved

  submitForm() {
    this.submitted = true;
    this.formSaved = true; // Mark form as saved once submitted
  }

  // Method to check if the form can be deactivated
  canDeactivate(): boolean {
    // Check if the form is not submitted and has unsaved changes
    if (!this.formSaved && (this.name || this.email)) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true; // Allow deactivation if the form is saved or empty
  }
}
