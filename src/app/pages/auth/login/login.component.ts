import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BlockuiService } from 'src/app/services/common/block-ui/blockui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _blockUiService: BlockuiService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    this._blockUiService.start("Veuillez patienter...");
    this._authService.Connexion({
      ...form.value,
      grant_type: "password",
      client_id: "frontend"
    }).then(res=>{
      this._router.navigate([])
    }).catch(err=>{

    });
  }

}
