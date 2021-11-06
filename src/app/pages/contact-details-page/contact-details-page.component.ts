import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move.model';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { ContactService } from 'src/app/services/contact.service';
import { MsgService } from 'src/app/services/msg.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss'],
})
export class ContactDetailsPageComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private contactService: ContactService,
    private bitcoinService: BitcoinService,
    private msgService: MsgService
  ) {}

  routeSubscription!: Subscription;
  contact!: Contact;
  loggedInUserSubscription!: Subscription;
  loggedInUser!: User | undefined;

  bitcoinRate!: any;
  movesTitle: string = 'Moves History';
  movesList!: Move[];

  isRemoveModal: boolean = false;

  onTransfer(amount: number) {
    let msg = '';
    if (this.loggedInUser) {
      this.userService.trasfer(this.loggedInUser, this.contact, amount);
      msg = 'Successfully transferred!';
      this.router.navigateByUrl('contact');
    } else {
      msg = 'Please login first';
    }
    this.msgService.setMsg(msg);
  }

  toggleRemoveModal(res: boolean): void {
    this.isRemoveModal = !this.isRemoveModal;
    if (res) this.onRemove()
    
  }

  onRemove(): void {
    if (this.contact._id) {
      this.contactService.deleteContact(this.contact._id);
      const msg = 'Successfully deleted!';
      this.msgService.setMsg(msg);
    }
    this.router.navigateByUrl('contact');
  }

  async ngOnInit(): Promise<void> {
    this.routeSubscription = this.route.data.subscribe((data) => {
      this.contact = data.contact;
    });

    this.loggedInUserSubscription = this.userService.loggedInUser$.subscribe(
      (user) => {
        this.loggedInUser = user;
      }
    );

    this.userService.getLoggedInUser();
    if (this.loggedInUser)
      this.movesList = this.loggedInUser.moves.filter(
        (move) => move.toId === this.contact._id
      );
      
    this.bitcoinRate = await this.bitcoinService.getRate().toPromise();
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.loggedInUserSubscription.unsubscribe();
  }
}
