import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { WorkspaceService } from '../../../../core/services/workspace.service';

@Component({
  selector: 'app-list-workspace',
  templateUrl: './list-workspace.component.html',
  styleUrl: './list-workspace.component.scss'
})
export class ListWorkspaceComponent implements OnInit{
  response: any;

  constructor(private router: Router, private workspaceService: WorkspaceService) { }
  
  ngOnInit() {
    this.workspaceService.get({ page: 1 }).subscribe(res => {
      this.response = res;
    });
  }

}
