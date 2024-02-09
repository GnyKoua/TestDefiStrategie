import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { SecureStorage } from 'src/app/helpers/secure-storage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private secureStatus: any;
  private secretKey: any;

  constructor() {
    this.secureStatus = environment.LOCAL_STORAGE_SECURE_STATUT;
    this.secretKey = environment.LOCAL_STORAGE_SECRET_KEY;
  }

  private secureStorage = new SecureStorage(localStorage, {
    hash: (key: any) => {
      key = CryptoJS.SHA256(key, this.secretKey);
      return key.toString();
    },
    encrypt: (data: any) => {
      data = CryptoJS.AES.encrypt(data, this.secretKey);
      data = data.toString();
      return data;
    },
    decrypt: (data: any) => {
      data = CryptoJS.AES.decrypt(data, this.secretKey);
      try {
        data = data.toString(CryptoJS.enc.Utf8);
      } catch (error) {
        data = null;
      }
      return data;
    }
  });


  // Set data to local storage
  setItem(key: string, value: any) {
    if (this.secureStatus == true) {
      this.secureStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  // Get value from local storage
  getItem(key: string) {
    if (this.secureStatus == true) {
      return JSON.parse(this.secureStorage.getItem(key));
    } else {
      return JSON.parse(localStorage.getItem(key) ?? "{}");
    }
  }

  // Delete value from local storage
  removeItem(key: string) {
    if (this.secureStatus == true) {
      this.secureStorage.removeItem(key);
    } else {
      localStorage.removeItem(key);
    }
  }

  // Clear the local storage
  clear() {
    if (this.secureStatus == true) {
      return this.secureStorage.clear();
    } else {
      localStorage.clear();
    }
  }
}
