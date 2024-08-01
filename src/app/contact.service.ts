import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
}

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private _storage: Storage | null = null;
  private contacts: Contact[] = [];
  private currentId: number = 0;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;

    const storedContacts = await this._storage.get('contacts');
    if (storedContacts) {
      this.contacts = storedContacts;
      this.currentId = this.contacts.length > 0 ? Math.max(...this.contacts.map(c => c.id)) + 1 : 1;
    }
  }

  async addContact(contact: Omit<Contact, 'id'>): Promise<void> {
    if (!this._storage) {
      throw new Error('Storage is not initialized');
    }
    const newContact: Contact = { ...contact, id: this.currentId++ };
    this.contacts.push(newContact);
    await this._storage.set('contacts', this.contacts);
  }

  async getContacts(): Promise<Contact[]> {
    if (!this._storage) {
      throw new Error('Storage is not initialized');
    }
    return this.contacts;
  }
}

