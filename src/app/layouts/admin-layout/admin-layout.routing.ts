import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/clients/icons.component';
import { MapsComponent } from '../../pages/products/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/employes/tables.component';
import {CommandComponent} from '../../pages/command/command.component';
import {VehicleComponent} from '../../pages/vehicle/vehicle.component';
import {AuthorizationsGuard} from '../../authorizations.guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent , canActivate: [AuthorizationsGuard] },
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [AuthorizationsGuard] },
    { path: 'employe',         component: TablesComponent , canActivate: [AuthorizationsGuard]},
    { path: 'client',          component: IconsComponent, canActivate: [AuthorizationsGuard] },
    { path: 'product',           component: MapsComponent, canActivate: [AuthorizationsGuard] },
  { path: 'command',           component: CommandComponent, canActivate: [AuthorizationsGuard] },
  { path: 'vehicle',           component: VehicleComponent, canActivate: [AuthorizationsGuard] }
];
