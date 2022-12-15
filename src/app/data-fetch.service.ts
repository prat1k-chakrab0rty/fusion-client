import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  baseApiUrl:string="http://localhost:5222";
  constructor(private http : HttpClient) { }
  
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseApiUrl+'/api/User');
  }
  updateUser(updateEmployeeRequest:User):Observable<User>{
    console.log(updateEmployeeRequest);
    return this.http.put<User>(this.baseApiUrl+'/api/User/'+updateEmployeeRequest.id,updateEmployeeRequest);
  }
}
