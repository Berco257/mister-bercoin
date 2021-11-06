import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../models/contact.model';
import { Move } from '../models/move.model';
import { User } from '../models/user.model';
import { ContactService } from './contact.service';
import { UtilService } from './util.service';

const USERS = [
  {
    _id: '7due6s9a3',
    fullName: 'Berco David',
    username: 'berco',
    password: 'berco',
    coins: 94.78,
    moves: [
      {
        toId: '5a566402f90ae30e97f990db',
        to: 'Faulkner Flores',
        at: 1622884858960,
        amount: 1.2,
      },
      {
        toId: '5a566402abce24c6bfe4699d',
        to: 'Dominique Soto',
        at: 1612344858960,
        amount: 0.8,
      },
      {
        toId: '5a566402f90ae30e97f990db',
        to: 'Faulkner Flores',
        at: 1535987758960,
        amount: 0.72,
      },
      {
        toId: '5a566402abce24c6bfe4699d',
        to: 'Dominique Soto',
        at: 1520765768960,
        amount: 2,
      },
      {
        toId: '5a566402abce24c6bfe4699d',
        to: 'Dominique Soto',
        at: 1511884858960,
        amount: 0.5,
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private contactService: ContactService,
    private utilService: UtilService
  ) {}

  private _usersDb: User[] = USERS;

  private _loggedInUserDb: User | undefined = this._usersDb.find(
    (user) => user._id === '7due6s9a3'
  );

  private _loggedInUser$ = new BehaviorSubject<User | undefined>(undefined);
  public loggedInUser$ = this._loggedInUser$.asObservable();

  public getLoggedInUser() {
    this._loggedInUser$.next(this._loggedInUserDb);
  }

  public async trasfer(from: User, to: Contact, amount: number) {
    const contact = { ...to, coins: to.coins + amount };
    this.contactService.saveContact(contact);
    const user = { ...from, coins: from.coins - amount };
    user.moves.unshift(this._addMove(to, amount))
    this.saveUser(user);
    this._loggedInUserDb = this._usersDb.find((u) => user._id === u._id);
    this.getLoggedInUser();
  }

  public saveUser(user: User) {
    return user._id ? this._updateUser(user) : this._addUser(user);
  }

  private _addMove(to: Contact, amount: number):Move {
    return {
      toId: to._id || '',
      to: to.name,
      at: Date.now(),
      amount: amount,
    };
  }

  private _updateUser(updatedUser: User) {
    this._usersDb = this._usersDb.map((user) =>
      updatedUser._id === user._id ? updatedUser : user
    );
  }

  private _addUser(user: User) {
    const newUser: User = { ...user };
    newUser._id = this.utilService.makeId();
    this._usersDb.push(newUser);
  }
}