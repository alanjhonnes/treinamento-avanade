import { NgModule } from '@angular/core';
import { ProfessionalsService } from './professionals.service';
import { ClientsService } from './clients.service';
import { ProjectsService } from './projects.service';
import { JobsService } from './jobs.service';
import { AssignmentsService } from './assignments.service';

@NgModule({
    providers: [
        ProfessionalsService,
        ClientsService,
        JobsService,
        ProjectsService,
        AssignmentsService
    ]
})
export class CoreModule {

}