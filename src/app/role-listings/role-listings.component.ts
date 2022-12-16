import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';

@Component({
  selector: 'app-role-listings',
  templateUrl: './role-listings.component.html',
  styleUrls: ['./role-listings.component.css']
})
export class RoleListingsComponent implements OnInit {
  roles: any=[];
  constructor(private dataService:DataFetchService) { }

  ngOnInit(): void {
    this.dataService.getAllRoles()
    .subscribe(
      {
        next:(role)=>{
          this.roles=role;
          console.log(role);
        },
        error:(response)=>{console.log(response)}
      }
      );
  }
  // updateUser():void{
  //   console.log(this.user);
  //   this.dataService.updateUser(this.user).subscribe({
  //     next:(user)=>{console.log(user);}
  //   });
  // }
}
