import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  constructor(private router: Router, private modalService: NgbModal) {}

  onLogin() {
    // Perform your login logic here
    this.router.navigate(['/workspacelist']);
  }

  openModal() {
    //this.modalService.open(PolicyComponent);
  }

}
