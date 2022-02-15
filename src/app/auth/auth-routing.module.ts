import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../shared/components/login/login.component';
import { SignUpComponent } from '../shared/components/sign-up/sign-up.component';
import { EditVehicleComponent } from './components/edit-vehicle/edit-vehicle.component';
import { FormComponent } from './components/Form/form.component';
import { OutputComponent } from './components/Output/output.component';
import { VehicleDashboardComponent } from './components/vehicle-dashboard/vehicle-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: 'output', component: OutputComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard', component: VehicleDashboardComponent },
  { path: 'edit', component: EditVehicleComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
