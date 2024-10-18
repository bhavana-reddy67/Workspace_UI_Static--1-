import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ListProjectsComponent } from './components/list-projects/list-projects.component';
import { ManageProjectComponent } from './components/manage-project/manage-project.component';


@NgModule({
  declarations: [
    ListProjectsComponent,
    ManageProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
