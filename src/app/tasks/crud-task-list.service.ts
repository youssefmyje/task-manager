import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { CRUDTaskService } from './crud-task-service.interface';

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListService implements CRUDTaskService {
  private tasks: Task[] = []; // Liste des tâches

  // Méthode pour créer une nouvelle tâche
  createTask(task: Task): void {
    this.tasks.push(task);
  }

  // Méthode pour lire toutes les tâches
  readTasks(): Task[] {
    return this.tasks;
  }

  // Méthode pour mettre à jour une tâche existante
  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  // Méthode pour supprimer une tâche par son ID
  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
