import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAddUserComponent } from './components/form-add-user/form-add-user.component';
import { HomeComponent } from './components/home/home.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lista',
    component: UsersListComponent
  },
  {
    path: 'formulario',
    component: FormAddUserComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
