import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  baseApiUrl:string="http://localhost:5222";
  constructor(private http : HttpClient,private toastr: ToastrService) { }
  
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseApiUrl+'/api/User');
  }
  getUser(id:string):Observable<User[]>{
    return this.http.get<User[]>(this.baseApiUrl+'/api/User/'+id);
  }
  updateUser(updateEmployeeRequest:User):Observable<User>{
    console.log(updateEmployeeRequest);
    return this.http.put<User>(this.baseApiUrl+'/api/User/'+updateEmployeeRequest.id,updateEmployeeRequest);
  }

  getAllRoles():Observable<any[]>{
    return this.http.get<any[]>(this.baseApiUrl+'/api/Role');
  }
  addRole(updateEmployeeRequest:any):Observable<any>{
    console.log(updateEmployeeRequest);
    return this.http.post<any>(this.baseApiUrl+'/api/Role/',updateEmployeeRequest);
  }
  
  deleteRole(id:string):Observable<any>{
    return this.http.delete<any>(this.baseApiUrl+'/api/Role/'+id);
  }

  getPermissionsByRoleId(id:string):Observable<any[]>{
    return this.http.get<any[]>(this.baseApiUrl+'/api/RolePermission/'+id);
  }

  updatePermission(updateEmployeeRequest:any):Observable<any>{
    console.log(updateEmployeeRequest);
    // console.log(updateEmployeeRequest[0].pId);
    return this.http.put<any>(this.baseApiUrl+'/api/RolePermission/'+updateEmployeeRequest.pId,updateEmployeeRequest);
  }

  updateRole(updateEmployeeRequest:any,id:string):Observable<any>{
    console.log(updateEmployeeRequest);
    updateEmployeeRequest.id=id;
    return this.http.put<any>(this.baseApiUrl+'/api/Role/'+id,updateEmployeeRequest);
  }
   
  showSuccess(message:any, title:any){
      this.toastr.success(message, title)
  }
   
  showError(message:any, title:any){
      this.toastr.error(message, title)
  }
   
  showInfo(message:any, title:any){
      this.toastr.info(message, title)
  }
   
  showWarning(message:any, title:any){
      this.toastr.warning(message, title)
  }
}
