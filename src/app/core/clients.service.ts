import { Client } from '../models/client.model';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientsService {

  clients: Client[] = [
    {
      id: '1',
      name: 'Avanade',
      cnpj: '123456789',
      contact: '1',
      email: 'avanade@avanade.com',
      responsibleProfessionalId: '1',
    },
    {
      id: '2',
      name: 'Isban',
      cnpj: '987654321',
      contact: '1',
      email: 'isban@isban.com',
      responsibleProfessionalId: '1',
    },
  ];

  constructor() { }

  getClients(): Observable<Client[]> {
    return Observable.of(this.clients).delay(500);
  }

  getClient(id: string): Observable<Client> {
    return Observable.of(this.clients.find((client => client.id === id))).delay(500);
  }

}
