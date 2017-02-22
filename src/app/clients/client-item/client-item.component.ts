import { Client } from '../../models/client.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.css']
})
export class ClientItemComponent implements OnInit {

  @Input()
  client: Client;

  @Output()
  onEdit: EventEmitter<Client> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
