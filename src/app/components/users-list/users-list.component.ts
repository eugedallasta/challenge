import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users!: User[];

  constructor(private service: UsersServiceService) { }

  ngOnInit(): void {
    this.users = this.service.getUsers();
  }

}
