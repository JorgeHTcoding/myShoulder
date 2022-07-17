
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-familiar',
  templateUrl: './landing-familiar.component.html',
  styleUrls: ['./landing-familiar.component.scss']
})
export class LandingFamiliarComponent implements OnInit {

  constructor() {

   }
  show:boolean= true;
  ngOnInit(): void {
    
   
  }

}
