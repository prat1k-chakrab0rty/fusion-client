import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfilePageComponent } from './my-profile-page/my-profile-page.component';
import { RolePermissionPageComponent } from './role-permission-page/role-permission-page.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '', component: TestComponent
  },
  {
    path: 'profile', component: MyProfilePageComponent
  },
  {
    path: 'useradministration/role/permission', component: RolePermissionPageComponent
  },
  {
    path: 'useradministration/role', component: RolesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
