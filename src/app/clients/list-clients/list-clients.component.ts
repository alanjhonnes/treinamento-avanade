import { Router } from '@angular/router';
import { ClientsService } from '../../core/clients.service';
import { Client } from '../../models/client.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  clients: Client[];
  isLoading = false;

  constructor(private clientsService: ClientsService, private router: Router) {
    this.isLoading = true;
    this.clientsService.getClients().subscribe(clients => {
      this.clients = clients;
      this.isLoading = false;
    });
  }
  

  goToEdit(client: Client) {
    this.router.navigate(['clientes', client.id]);
  }

  ngOnInit() {
  }

}
