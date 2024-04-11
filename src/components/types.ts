// Définition des types de données pour les tâches
export interface Task {
    id: number;
    title: string;
    startTime: string; // Format "HH:MM"
    endTime: string; // Format "HH:MM"
    day: string; // "Lundi", "Mardi", etc.
  }
  
  // Optionnel, selon vos besoins pour TaskForm
  export interface TaskDetails {
    title: string;
    startTime: string;
    endTime: string;
    day: string;
    description?: string;
    date?: string;
  }

  export interface TaskFormProps {
    addTask: (taskDetails: TaskDetails) => void;
  }

  
  
 