import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import { CharacterDetailComponent } from "./views/character-detail/character-detail.component";
import { SearchComponent } from "./views/search/search.component";
import { ErrorComponent } from "./views/error/error.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: CharacterDetailComponent },
  { path: 'search/:name', component: SearchComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { };
