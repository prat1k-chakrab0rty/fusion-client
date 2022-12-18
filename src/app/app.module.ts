import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileImageSelectorComponent } from './profile-image-selector/profile-image-selector.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { MyProfilePageComponent } from './my-profile-page/my-profile-page.component';
import { RolePermissionPageComponent } from './role-permission-page/role-permission-page.component';
import { TestComponent } from './test/test.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RolesListComponent } from './roles-list/roles-list.component';
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    ProfileComponent,
    ProfileImageSelectorComponent,
    ProfileFormComponent,
    MyProfilePageComponent,
    RolePermissionPageComponent,
    TestComponent,
    ModalComponent,
    RolesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
