import { Component } from '@angular/core';
import { NavComponent } from '../../layout/nav/nav.component';
import { AddButtonComponent } from '../../layout/add-button/add-button.component';
import { ContentComponent } from '../../layout/content/content.component';

@Component({
  selector: 'app-homepage',
  imports: [NavComponent, AddButtonComponent, ContentComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  currentPage = 0;
}
