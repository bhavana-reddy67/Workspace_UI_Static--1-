import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { SignInComponent } from './modules/login/components/sign-in/sign-in.component';
import { StyleGuideUiComponent } from './modules/workspace/components/style-guide-ui/style-guide-ui.component';

const routes: Routes = [
  // { path: '', redirectTo: 'signin', pathMatch: 'full' },
  // { path: 'signin', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'signin', component: SignInComponent },
  { path: 'style-guide', component: StyleGuideUiComponent},
  {
    path: '', component: DefaultLayoutComponent,    
    children: [
      { path: '', redirectTo: 'workspacelist', pathMatch: 'full'},
      { path: 'workspace', loadChildren: () => import('./modules/workspace/workspace.module').then(m => m.WorkspaceModule) },
      { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule) },

    ]
  },
  { path: '**', redirectTo: 'workspacelist' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
