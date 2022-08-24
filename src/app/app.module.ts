import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { FormAddUserComponent } from './components/form-add-user/form-add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UsersListComponent,
    FormAddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
