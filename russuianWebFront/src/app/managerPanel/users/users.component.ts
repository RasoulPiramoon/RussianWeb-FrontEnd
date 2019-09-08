import { Component, OnInit } from '@angular/core';
import { usersManager } from './usersManager';
import { UsersService } from './users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: usersManager[]

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
  deleteUser(user: usersManager) {
    this.userService.deleteUser(user)
      .subscribe(x => {
        this.getUsers();
      })
  }
}
