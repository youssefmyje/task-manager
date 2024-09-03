export enum TaskState {
  EN_COURS = 'EN_COURS',
  A_FAIRE = 'A_FAIRE',
  TERMINEE = 'TERMINEE'
}

export class Task {
  id: number;
  title: string;
  description: string;
  state: TaskState;
  createdAt: Date;

  constructor(id: number, title: string, description: string, state: TaskState, createdAt: Date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.state = state;
    this.createdAt = createdAt;
  }
}
