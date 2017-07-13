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
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home', // home
        loadChildren: 'app/pages/home/home.module#HomeModule'
      },
      {
        path: 'p/:id',  // note
        loadChildren: 'app/pages/note/note.module#NoteModule'
      },
      {
        path: 'c/:id',  // collection
        loadChildren: 'app/pages/collection/collection.module#CollectionModule'
      },
      {
        path: 'r',  // recommendation
        loadChildren: 'app/pages/recommendation/recommendation.module#RecommendationModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
