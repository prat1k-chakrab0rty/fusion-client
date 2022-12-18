import { Component,OnInit } from '@angular/core';
import { windowCount } from 'rxjs';
import { DataFetchService } from '../data-fetch.service';


@Component({
  selector: 'app-role-permission-page',
  templateUrl: './role-permission-page.component.html',
  styleUrls: ['./role-permission-page.component.css']
})
export class RolePermissionPageComponent {
  permissions:any;
  id:any="5ef2fa8e-3142-4f99-95b7-58ccb7458b60"
  constructor(private dataService:DataFetchService) { }
  ngOnInit(): void {
    this.dataService.getPermissionsByRoleId(this.id)
    .subscribe(
      {
        next:(user)=>{
          this.permissions=user;
          console.log(user);
        },
        error:(response)=>{console.log(response)}
      }
      );
  }
  changeRole():void{
    console.log("first");
    // this.id=document.getElementById("role")?.;
    console.log(this.id);
    this.dataService.getPermissionsByRoleId(this.id)
    .subscribe(
      {
        next:(user)=>{
          this.permissions=user;
          console.log(user);
        },
        error:(response)=>{console.log(response)}
      }
      );
  }
  updatePermission(index:number):void{
    this.dataService.updatePermission(this.permissions[index]).subscribe(
      {
        next:(user)=>{
        },
        error:(response)=>{console.log(response)}
      }
    )

  }
}
