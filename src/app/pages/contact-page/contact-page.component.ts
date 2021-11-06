import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit, OnDestroy {
  constructor(private contactService: ContactService) {}

  contacts!: Contact[];
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.contactService.contacts$.subscribe((contacts) => {
      this.contacts = contacts;
    });
    this.contactService.query();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
