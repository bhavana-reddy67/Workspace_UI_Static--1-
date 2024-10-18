import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.scss'
})
export class ListProjectsComponent {
  constructor(private router: Router) {}

}
