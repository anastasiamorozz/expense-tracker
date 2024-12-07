import { Component, Input } from '@angular/core';
import { AddButtonComponent } from '../add-button/add-button.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent {
  @Input() selectedOption: Number = 0;

  constructor(private router: Router) {}

  navigateToPage(route: string): void {
    this.router.navigate([route]);
  }
}
