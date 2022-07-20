import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';
import { CartaPre } from '../models/carta-pre';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartaPreService {
  private url: string;
  public carta:CartaPre;
  constructor(private http:HttpClient, public userService:UserService) { }


  postPresentacion(cartaPresentacion:CartaPre):Observable<Object>{    
    this.url ="http://localhost:3000/cartaPre?id=" + this.userService.user.id_user ;   
    return this.http.post(this.url,cartaPresentacion)
  }
}



 




