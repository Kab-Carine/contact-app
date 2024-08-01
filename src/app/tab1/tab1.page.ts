import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService, Contact } from '../contact.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService, private router: Router) {}

  async ngOnInit() {
    this.contacts = await this.contactService.getContacts();
  }

  async ionViewWillEnter() {
    this.contacts = await this.contactService.getContacts();
  }

  viewContactDetails(contactId: number) {
    this.router.navigate(['/tabs/tab2', contactId]);
  }
}

  
