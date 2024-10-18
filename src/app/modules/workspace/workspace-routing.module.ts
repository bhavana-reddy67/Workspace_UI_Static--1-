import { RouterModule, Routes } from '@angular/router';

import { ListWorkspaceComponent } from './components/list-workspace/list-workspace.component';
import { ManageWorkspaceComponent } from './components/manage-workspace/manage-workspace.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: ListWorkspaceComponent },
  { path: 'workspacelist', component: ListWorkspaceComponent },
  { path: 'createworkspace', component: ManageWorkspaceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkspaceRoutingModule {}
