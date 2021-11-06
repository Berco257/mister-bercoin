import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';

@Injectable({
  providedIn: 'root',
})
export class ContactResolver implements Resolve<Contact> {
  constructor(private contactService: ContactService) {}
  async resolve(route: ActivatedRouteSnapshot) {
    const { contactId } = route.params;
    const contact = await this.contactService
      .getContactById(contactId)
      .toPromise();
      
    return contact;
  }
}
