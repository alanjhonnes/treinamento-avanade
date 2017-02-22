import { Client } from '../../models/client.model';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from '../../core/clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  isLoading = false;
  client: Client;

  constructor(private activatedRoute: ActivatedRoute, private clientsService: ClientsService) {
    this.activatedRoute.params
      .map((params: { id: string }) => params.id)
      .do(() => this.isLoading = true)
      .switchMap((id) => this.clientsService.getClient(id))
      .subscribe(client => {
        this.isLoading = false;
        this.client = client;
      });
  }

  ngOnInit() {
  }

}
