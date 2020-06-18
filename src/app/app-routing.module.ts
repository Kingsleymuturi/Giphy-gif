import { NgModule } from '@angular/core';
import { GiphyComponent } from './giphy/giphy.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { StickersComponent } from './stickers/stickers.component';


const routes: Routes = [
  { path: 'giphy', component: GiphyComponent},
  {path:'stickers', component: StickersComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo:"/giphy", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
