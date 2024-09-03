import { Task } from '../model/task';

export interface CRUDTaskService {
  createTask(task: Task): void;
  readTasks(): Task[];
  updateTask(task: Task): void;
  deleteTask(taskId: number): void;
}
