import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   {path:' ', component:AppComponent,    pathMatch: 'full'},
// { path: '**', redirectTo: '' },
// {path:'App ',component:AppComponent},
  { path: 'hollywood', loadChildren: () => import('./hollywood/hollywood.module').then(m => m.HollywoodModule) },
{ path: 'lollywood', loadChildren: () => import('./lollywood/lollywood.module').then(m => m.LollywoodModule) },
 { path: 'bollywood', loadChildren: () => import('./bollywood/bollywood.module').then(m => m.BollywoodModule) },
  { path: 'chinawood', loadChildren: () => import('./chinawood/chinawood.module').then(m => m.ChinawoodModule) },
   { path: 'tamil', loadChildren: () => import('./tamil/tamil.module').then(m => m.TamilModule) },
   { path: 'seasons', loadChildren: () => import('./seasons/seasons.module').then(m => m.SeasonsModule) },
   {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
