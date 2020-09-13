import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { DetailsComponent } from './Pages/details/details.component';
import { SearchComponent } from './Pages/search/search.component';

const routes: Routes = [
  { path: 'home/:category', component: HomeComponent },
  { path: 'search/:query', component: SearchComponent },
  { path: 'details/:article', component: DetailsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home/general' },
  { path: '', pathMatch: 'full', redirectTo: 'home/general' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
