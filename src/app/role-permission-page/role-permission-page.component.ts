import { Component,OnInit } from '@angular/core';
import { windowCount } from 'rxjs';
import { DataFetchService } from '../data-fetch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-role-permission-page',
  templateUrl: './role-permission-page.component.html',
  styleUrls: ['./role-permission-page.component.css']
})
export class RolePermissionPageComponent {
  permissions:any;
  id:any="5bda1df0-4aa5-411c-3768-08dae1779037";
  constructor(private dataService:DataFetchService,private route: ActivatedRoute) { }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
  const roleIdFromRoute = String(routeParams.get('roleId'));
  this.id=roleIdFromRoute;
    this.dataService.getPermissionsByRoleId(roleIdFromRoute)
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
