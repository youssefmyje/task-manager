import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskFacade {
  constructor(private http: HttpClient) {}

  fetchTasksFromAPI(): Observable<Task[]> {
    const url = 'https://domain/data?param=test';
    return this.http.get<Task[]>(url);
  }
  
}
