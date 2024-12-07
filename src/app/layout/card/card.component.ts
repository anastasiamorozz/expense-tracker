import { Component, HostListener  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.cart-menu')) {
      this.isMenuOpen = false;
    }
  }

  onMenuOptionClick(option: string): void {
    console.log(`Selected option: ${option}`);
    this.isMenuOpen = false;
  }
}
