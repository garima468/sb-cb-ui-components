import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DiscussionV2Component } from './discussion-v2.component'
import { NewCommentComponent } from './_common/new-comment/new-comment.component'
import { CommentCardComponent } from './_common/comment-card/comment-card.component'
import { WidgetCommentComponent } from './_common/widget-comment/widget-comment.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button'
import { MatIconModule } from '@angular/material/icon'
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input'
import { AvatarPhotoComponent } from './_common/avatar-photo/avatar-photo.component'
import { DiscussionV2Service } from './_services/discussion-v2.service'
import { PipesModule } from './_pipes/pipes.module'
import { SkeletonLoaderModule } from './skeleton-loader/skeleton-loader.module'
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip'

@NgModule({
  declarations: [
    DiscussionV2Component,
    NewCommentComponent,
    CommentCardComponent,
    WidgetCommentComponent,
    AvatarPhotoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    PipesModule,
    SkeletonLoaderModule,
  ],
  providers: [
    DiscussionV2Service,
  ],
  exports: [
    DiscussionV2Component,
    NewCommentComponent,
    CommentCardComponent,
    WidgetCommentComponent,
  ],
})
export class DiscussionV2Module { }
