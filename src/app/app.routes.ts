import { Routes } from '@angular/router';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'homepage', pathMatch: 'full'},
  { path: '',
    component: HomepageComponent },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
];
