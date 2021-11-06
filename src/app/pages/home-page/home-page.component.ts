import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Move } from 'src/app/models/move.model';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(
    private bitcoinService: BitcoinService,
    private userService: UserService
  ) {}

  bitcoinRate!: any;
  loggedInUser!: User | undefined;
  movesTitle: string = 'Your last 5 Moves';
  movesList!: Move[];
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.userService.loggedInUser$.subscribe((user) => {
      this.loggedInUser = user;
    });
    this.userService.getLoggedInUser();
    if (this.loggedInUser) this.movesList = this.loggedInUser.moves.slice(0, 5);
    this.bitcoinRate = this.bitcoinService.getRate();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
