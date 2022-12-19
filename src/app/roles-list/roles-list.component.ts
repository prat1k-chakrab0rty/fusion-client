import { Component } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent {
  roleIdToBeDeleted: string = "";
  idForPermissionCreation: string = "";
  roles: any = [];
  addR: any = {
    name: "",
    description: ""
  };
  edit: any = {};
  constructor(private dataService: DataFetchService) { }

  ngOnInit(): void {
    this.dataService.getAllRoles()
      .subscribe(
        {
          next: (role) => {
            this.roles = role;
            console.log(role);
          },
          error: (response) => { console.log(response) }
        }
      );
  }
  addRole(): void {
    console.log(this.addR);
    this.dataService.addRole(this.addR).subscribe({
      next: (user) => {
        console.log(user);
        this.idForPermissionCreation = user.id;
        this.addDefaultPermissions();
        setInterval(this.refresh, 2000);
      }
    });
  }
  refresh() {
    window.location.reload();
  }
  addDefaultPermissions() {
    for (let index = 0; index < 8; index++) {
      this.dataService.addPermission({
        id: this.idForPermissionCreation,
        fid: this.idForPermissionCreation
      }).subscribe({
        next: (permission) => {
          console.log("success");
        }
      });
    }
  }
  deleteRole(id: string): void {
    console.log(id);
    this.dataService.deleteRole(id).subscribe({
      next: (user) => {
        console.log(user);
        this.removePermissions(id);
        window.location.reload();
      }
    });
  }
  removePermissions(id: string) {
    console.log(id);
    this.dataService.deletePermission(id).subscribe({
      next: (permission) => {
        console.log("success");
      }
    });
  }
  editRole(name: string, description: string, id: string): void {
    this.edit.name = name;
    this.edit.description = description;
    this.roleIdToBeDeleted = id;
    console.log(this.edit);
  }
  updateUser(): void {
    console.log(this.edit);
    this.dataService.updateRole(this.edit, this.roleIdToBeDeleted).subscribe({
      next: (user) => {
        console.log(user);
        window.location.reload();
      }
    });
  }
}
