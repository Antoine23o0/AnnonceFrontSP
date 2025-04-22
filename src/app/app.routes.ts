import { Routes } from '@angular/router';
import {AuthComponent} from './features/auth/auth.component';
import {AjoutComponent} from './features/annonces/ajout/ajout.component';
import {ListComponent} from './features/annonces/list/list.component';
import {ModifComponent} from './features/annonces/modif/modif.component';
import {HomeComponent} from './features/home/home.component';

export const routes: Routes = [
  {path : 'authentification', component : AuthComponent },
  {path : 'modifAnnonce', component : ModifComponent },
  {path : 'ajoutAnnonce', component : AjoutComponent },
  {path : 'annonces', component : ListComponent },
  {path : '', component : HomeComponent },


];
