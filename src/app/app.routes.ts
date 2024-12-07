import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CategoriesComponent } from './pages/categories/categories.component';

export const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full'},
  { path: 'homepage', component: HomepageComponent },
  { path: 'categories', component: CategoriesComponent },
];
