import { RouterModule, Routes } from '@angular/router';

import { ListProjectsComponent } from './components/list-projects/list-projects.component';
import { ManageProjectComponent } from './components/manage-project/manage-project.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: ListProjectsComponent },
  { path: 'projectlist', component: ListProjectsComponent },
  { path: 'createproject', component: ManageProjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
