import { RouterModule,Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const app_routes: Routes = [
    {  path: '', component: LoginComponent },
    {  path: 'home', component: HomeComponent },
    {  path: '**',  pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);
