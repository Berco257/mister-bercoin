import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { MsgService } from 'src/app/services/msg.service';

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss'],
})
export class ContactEditPageComponent implements OnInit, OnDestroy {
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private msgService: MsgService
  ) {}

  subscription!: Subscription;
  contact!: Contact;

  onSaveContact(form: NgForm) {
    let msg = '';
    
    if(form.invalid){
      msg = 'Invalid contact name'
      this.msgService.setMsg(msg);
      return
    }

    const contactId = this.contactService.saveContact(this.contact);
    if (this.contact._id) msg = 'Successfully edited!';
    else msg = 'Successfully added!';
    this.msgService.setMsg(msg);
    this.router.navigateByUrl(`/contact/${contactId}`);
  }

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe((data) => {
      this.contact = data.contact;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
