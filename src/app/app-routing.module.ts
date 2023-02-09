import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GroupsComponent } from './cards/groups/groups.component';
import { LibraryCardV2Component } from './cards/library-card-v2/library-card-v2.component';
import { LibraryCardComponent } from './cards/library-card/library-card.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'groups', component:GroupsComponent},
    {path: 'librarycard', component:LibraryCardComponent},
    {path: 'librarycardv2', component:LibraryCardV2Component},
    {path: 'home', component:AppComponent},
    {path:'**', redirectTo:'home'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
