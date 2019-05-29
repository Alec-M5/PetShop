import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path: 'pets', component: HomeComponent},
  {path: 'pets/new', component: CreateComponent},
  {path: 'pets/:id/edit', component: EditComponent},
  {path: 'pets/:id/adopt', component: HomeComponent},
  {path: 'pets/:id', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
