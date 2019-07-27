import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Values';
  subtitle = 'Read the values below and drag them into the box that best describes their importance to you'
}
