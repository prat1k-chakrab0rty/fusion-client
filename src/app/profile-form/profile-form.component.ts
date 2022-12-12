import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  focusB: string[] = ["addStyle", "addStyle", "addStyle", "addStyle", "addStyle", "addStyle", "addStyle", "addStyle"]
  focus(index: number): void {
    this.focusB[index] = "";
    // console.log("inside "+index);
  }
  focusout(index: number): void {
    this.focusB[index] = "addStyle";
    // console.log("outside "+index);
  }
}
