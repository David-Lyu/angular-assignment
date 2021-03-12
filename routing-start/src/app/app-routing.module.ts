import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurd } from './auth-gaurd.service';
import { CanDeactivateGaurd } from './can-deactivate-gaurd.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';


const   appRoutes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' },
  { path: "users", component: UsersComponent, children: [
    { path: ":id/:name", component: UserComponent},
  ] },
  { path: "servers", /**canActivate: [AuthGaurd],*/ component: ServersComponent, canActivateChild: [AuthGaurd], children: [
    { path: ":id", component: ServerComponent, resolve: {server: ServerResolver} },
    { path: ":id/edit", component: EditServerComponent, canDeactivate: [CanDeactivateGaurd]},
  ] },
  // { path: "not-found", component: PageNotFoundComponent },
  { path: "not-found", component: ErrorPageComponent, data: {message: 'Page not found!'} },
  //this has to be on the bottom since order matters!
  { path: "**", redirectTo: '/not-found' },
]

@NgModule({
  imports: [
    //the useHash is for older browser to allow webserver to parse it like the paths we created
    RouterModule.forRoot(appRoutes, /*{useHash: true}*/)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
