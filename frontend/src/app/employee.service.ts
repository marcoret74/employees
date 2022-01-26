import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Employee } from './employee'

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl =
    'http://localhost:8080/springboot-crud-rest/api/v1/employees'
  constructor(private http: HttpClient) {}

  public getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`)
  }

  public createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}`, employee)
  }

  public updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value)
  }

  public deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' })
  }

  public getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
  }
}
