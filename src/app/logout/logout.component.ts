import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { AuthenticService } from '../services/authentic.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route:Router,private serve:AuthenticService) { }

  ngOnInit(): void {

    localStorage.removeItem('user')
    
    this.route.navigate(['login'])
    this.serve.logv.next(true)
  }

}
