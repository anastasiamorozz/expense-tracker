import { Component } from '@angular/core';
import { NavComponent } from '../../layout/nav/nav.component';
import { CategoryComponent } from '../../layout/category/category.component';

@Component({
  selector: 'app-categories',
  imports: [NavComponent, CategoryComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  currentPage = 1;
}
