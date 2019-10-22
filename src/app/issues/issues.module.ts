import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IssueAddComponent } from './issue-add/issue-add.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import { IssueListingComponent } from './issue-listing/issue-listing.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [IssueAddComponent, IssueEditComponent, IssueListingComponent],
})
export class IssuesModule { }
