import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}
