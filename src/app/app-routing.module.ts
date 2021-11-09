import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDefectComponent } from './defect/create-defect/create-defect.component';
import { ListDefectComponent } from './defect/list-defect/list-defect.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './route-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'listDefect',component:ListDefectComponent,canActivate:[RouteGuardService]},
  {path:'createDefect',component:CreateDefectComponent,canActivate:[RouteGuardService]},
  {path:'dashBoard',component: DashboardComponent ,canActivate:[RouteGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
