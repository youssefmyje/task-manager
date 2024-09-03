import { Component, OnInit } from '@angular/core';
import { ByStatutTaskListService } from '/Users/33758/task-manager/src/app/tasks/by-statut-task-list.service';
import { Task } from '/Users/33758/task-manager/src/app/model/task';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent implements OnInit {
  tasks: Task[] = [];
  archivedTasks: Task[] = [];

  constructor(private byStatutTaskService: ByStatutTaskListService) {}

  ngOnInit(): void {
    this.tasks = this.byStatutTaskService.getTasksByStatus('EN_COURS'); // Tâches en cours
    this.archivedTasks = this.byStatutTaskService.getTasksByStatus('TERMINEE'); // Tâches terminées
  }
}
