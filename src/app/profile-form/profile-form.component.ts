import { Component,OnInit } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  focusB: string[] = ["addStyle", "addStyle", "addStyle", "addStyle", "addStyle", "addStyle", "addStyle", "addStyle"]
  user: any;
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
    this.dataService.getUser("5ef2fa8e-3142-4f99-95b7-58ccb7458b61")
    .subscribe(
      {
        next:(user)=>{
          this.user=user;
          console.log(user);
        },
        error:(response)=>{console.log(response)}
      }
      );
  }
  updateUser():void{
    console.log(this.user);
    this.dataService.updateUser(this.user).subscribe({
      next:(user)=>{
        console.log(user);
        this.dataService.showSuccess("Data updated successfully !!", "");
      }
    });
  }
}
