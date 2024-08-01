import { Component, OnInit } from '@angular/core';
import { ContactService, Contact } from '../contact.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})



export class Tab3Page implements OnInit {
  contacts: Contact[] = [];
  newContact: Omit<Contact, 'id'> = { firstName: '', lastName: '', email: '', phone: ''};

  constructor(private contactService: ContactService) {}
  async ngOnInit() {
    this.contacts = await this.contactService.getContacts();
  }

  async addContact() {
    await this.contactService.addContact(this.newContact);
    this.contacts = await this.contactService.getContacts();
    this.newContact = { firstName: '', lastName: '', email: '', phone: ''};
  }

  }

 

  

