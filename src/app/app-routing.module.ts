import { ComicComponent } from './pages/comic/comic.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfirmExitGuard } from './guards/confirm-exit.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'gestion', component: GestionComponent, canDeactivate: [ConfirmExitGuard] },
  { path: 'comics/:id', component: ComicComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'registrar', component: RegistrarComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
