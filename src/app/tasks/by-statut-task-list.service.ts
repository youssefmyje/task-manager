import { Injectable } from '@angular/core';
import { CRUDTaskListService } from './crud-task-list.service'; // Importez le service CRUD
import { Task } from '../model/task'; 

@Injectable({
  providedIn: 'root'
})
export class ByStatutTaskListService {

  constructor(private crudTaskService: CRUDTaskListService) {}

  // Méthode pour obtenir les tâches par statut
  getTasksByStatus(status: string): Task[] {
    return this.crudTaskService.readTasks().filter(task => task.state === status);
  }
}
