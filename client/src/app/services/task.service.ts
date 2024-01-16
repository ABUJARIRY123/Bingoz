import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/Tasks';
import { TASKS } from 'src/app/mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
private apiUrl = 'http://localhost:5200/tasks'
  constructor(private http:HttpClient) {}

  getTasks(): Observable<Task[]> {
 
    return this.http.get<Task[]>(this.apiUrl)
  }
}
 