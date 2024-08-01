
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService, Contact } from '../contact.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit  {
  contact: Contact | undefined;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  async ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId) {
      const id = parseInt(contactId, 10);
      const contacts = await this.contactService.getContacts();
      this.contact = contacts.find(c => c.id === id);
    }
  }
}
