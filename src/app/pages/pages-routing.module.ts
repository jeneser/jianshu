import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'signup',
    loadChildren: 'app/pages/signup/signup.module#SignupModule'
  },
  {
    path: 'signin',
    loadChildren: 'app/pages/signin/signin.module#SigninModule'
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: 'app/pages/home/home.module#HomeModule'
      },
      {
        path: 'p/:id',
        loadChildren: 'app/pages/note/note.module#NoteModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
