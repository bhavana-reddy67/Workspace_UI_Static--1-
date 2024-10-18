import { CommonModule } from '@angular/common';
import { ListWorkspaceComponent } from './components/list-workspace/list-workspace.component';
import { ManageWorkspaceComponent } from './components/manage-workspace/manage-workspace.component';
import { NgModule } from '@angular/core';
import { SaButtonComponent } from '../../shared/components/sa-button/sa-button.component';
import { StyleGuideUiComponent } from './components/style-guide-ui/style-guide-ui.component';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { SharedModule } from '../../shared/shared.module'; 

@NgModule({
  declarations: [
    ManageWorkspaceComponent,
    StyleGuideUiComponent,
    ListWorkspaceComponent,    
    SaButtonComponent
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule
  ]
})
export class WorkspaceModule { }
