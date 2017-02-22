import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { Routes } from '@angular/router';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { ClientsComponent } from './clients/clients.component';
import { EditClientComponent } from './clients/edit-client/edit-client.component';
import { JobsComponent } from './jobs/jobs.component';
import { ProjectsComponent } from './projects/projects.component';
import { AssignmentsComponent } from './assignments/assignments.component';
export const appRoutes: Routes = [
    {
        path: 'profissionais',
        component: ProfessionalsComponent
    },
    {
        path: 'clientes',
        component: ClientsComponent,
        children: [
            {
                path: '',
                component: ListClientsComponent,
                pathMatch: 'full'
            },
            {
                path: ':id',
                component: EditClientComponent
            }
        ],
    },
    {
        path: 'cargos',
        component: JobsComponent
    },
    {
        path: 'projetos',
        component: ProjectsComponent
    },
    {
        path: 'alocacao',
        component: AssignmentsComponent
    }
]
