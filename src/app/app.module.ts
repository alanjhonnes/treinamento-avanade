import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { ClientsComponent } from './clients/clients.component';
import { JobsComponent } from './jobs/jobs.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClientItemComponent } from './clients/client-item/client-item.component';
import { EditClientComponent } from './clients/edit-client/edit-client.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessionalsComponent,
    ClientsComponent,
    JobsComponent,
    AssignmentsComponent,
    ProjectsComponent,
    ClientItemComponent,
    EditClientComponent,
    ListClientsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
