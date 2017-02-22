import { Router } from '@angular/router';
import { Client } from '../models/client.model';
import { ClientsService } from '../core/clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  

  ngOnInit() {
  }

}
