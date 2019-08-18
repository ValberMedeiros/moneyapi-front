import {Component, ErrorHandler, OnInit} from '@angular/core';
import {AuthService} from "../../seguranca/auth.service";
import {ToastyService} from "ng2-toasty";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandler,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
      .then(() => {
        this.toasty.success('Usuário deslogado');
        this.router.navigate(['/login']);
      })
      .catch(error => this.errorHandler.handleError(error));
  }
}
