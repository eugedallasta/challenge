import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  usersArray: User[] = [
    {
      name: 'John',
      age: 30,
      carreer: 'Developer',
      hobbie: 'Programming'
    },
    {
      name: 'Mary',
      age: 25,
      carreer: 'Designer',
      hobbie: 'Drawing'
    },
    {
      name: 'Juan',
      age: 35,
      carreer: 'Developer',
      hobbie: 'Programming'
    },
    {
      name: 'Luis',
      age: 40,
      carreer: 'Developer',
      hobbie: 'Programming'
    }
  ]

  constructor() { }

  getUsers() {
    return this.usersArray;
  }
  addUser(user: User) {
    this.usersArray.push(user);
  }
}
