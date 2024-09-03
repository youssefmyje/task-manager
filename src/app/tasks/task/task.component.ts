// src/app/task/task.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Task, TaskState } from '../../model/task.model';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() currentTask!: Task;
}
