// src/app/task-list/task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskFacade } from '/Users/33758/task-manager/src/app/tasks/task-facade.service';
import { Task,TaskState } from '../../model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList: Task[] = [];
  archivedTasks: Task[] = [];

  constructor(private taskFacade: TaskFacade) {}

  ngOnInit(): void {
    // Initialisation des tâches pour l'exemple
    this.taskList = [
      new Task(1, 'Task 1', 'Description 1', TaskState.EN_COURS, new Date()),
      new Task(2, 'Task 2', 'Description 2', TaskState.A_FAIRE, new Date()),
      new Task(3, 'Task 3', 'Description 3', TaskState.TERMINEE, new Date())
    ];


  }
}
