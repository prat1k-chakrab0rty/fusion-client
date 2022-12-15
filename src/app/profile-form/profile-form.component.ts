import { Component,OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { DataFetchService } from '../data-fetch.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  focusB: string[] = ["addStyle", "addStyle", "addStyle", "addStyle", "addStyle", "addStyle", "addStyle", "addStyle"]
  users: any[] =[];
  constructor(private dataService:DataFetchService) { }
  focus(index: number): void {
    this.focusB[index] = "";
    // console.log("inside "+index);
  }
  focusout(index: number): void {
    this.focusB[index] = "addStyle";
    // console.log("outside "+index);
  }

  ngOnInit(): void {
    this.dataService.getAllUsers()
    .subscribe(
      {
        next:(users)=>{
          this.users=users;
        },
        error:(response)=>{console.log(response)}
      }
      );
  }
  updateUser():void{
    console.log(this.users[0]);
    this.dataService.updateUser(this.users[0]).subscribe({
      next:(user)=>{console.log(user);}
    })
  }
}
