import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  currentUser: any = null;
  
  ngOnInit() {
    const isCurrentUser = localStorage.getItem('currentUser');
    if (isCurrentUser != null) {
      this.currentUser = JSON.parse(isCurrentUser);  // Parse the stored current user
    }
  }

}
