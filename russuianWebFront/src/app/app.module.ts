import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { UsersComponent } from './managerPanel/users/users.component';
import { PostsComponent } from './managerPanel/postsManager/posts/posts.component';
import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http'
import { UsersService } from './managerPanel/users/users.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CreatePostComponent } from './managerPanel/postsManager/posts/create-post/create-post.component';
import { CreateuserComponent } from './managerPanel/users/createuser/createuser.component';
import { EditPostComponent } from './managerPanel/postsManager/posts/edit-post/edit-post.component';
import { EditUserComponent } from './managerPanel/users/edit-user/edit-user.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagerPlanRoutingModule } from './managerPanel/manager-plan-routing.module';
import { DashboardComponent } from './managerPanel/dashboard/dashboard.component';
import { PostViewComponent } from './post-view/post-view.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CreatePostComponent,
    CreateuserComponent,
    EditPostComponent,
    EditUserComponent,
    DashboardComponent,
    PostViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    AccordionModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    DialogModule,
    BrowserAnimationsModule,
    ManagerPlanRoutingModule,
    MenubarModule,
    InputTextareaModule,
    EditorModule,
    ConfirmDialogModule,

  ],
  providers: [PostsService, UsersService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
