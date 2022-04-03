import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      email: 'poi@poi.it',
      name: 'Carlo',
      role: 'admin',
    },
    {
      id: 2,
      email: 'ora@poi.it',
      name: 'Luca',
      role: 'user',
    },
  ];
  constructor() { }

  getUser(idUser:number){
    return this.users.find((user)=>user.id === idUser)
  }

  getUsers(){
    return this.users
  }
}
