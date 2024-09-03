export class Task {
    constructor(
        public id: number,            // Identifiant unique de la tâche
        public title: string,         // Titre de la tâche
        public description: string,   // Description de la tâche
        public state: string,         // État de la tâche, par exemple "EN_COURS", "A_FAIRE", "TERMINEE"
        public createdAt: Date        // Date de création de la tâche
      ) {}
}
