import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from '../common/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private genTokenUrl: any;
  private userAccessKey = "CurrentUser";
  UserAccess: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private _storage: StorageService,
    private _http: HttpClient,
  ) {
    this.genTokenUrl = environment.GENERATE_TOKEN_URL;
  }

  IsAuthed = () => this.UserAccess.getValue() != null;
  UserDatas = () => this.UserAccess.getValue();

  CheckAuth() {
    return new Promise((resolve, reject) => {
      const user = this._storage.getItem(this.userAccessKey);
      if (user) {
        this.UserAccess.next(user);

        resolve(user);
      } else {
        reject(null);
      }
    });
  }

  Connexion(data: any) {
    return new Promise((resolve, reject) => {
      this._http.post<any>(this.genTokenUrl, data, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      })
        .subscribe({
          next: (resp) => {

            this._storage.setItem(this.userAccessKey, {
              ...resp,
              date: new Date().toISOString(),
            });

            resolve(resp);
          }, error: (err) => {
            console.log(err);

            reject(err);
          }
        });
    });
  }
}
