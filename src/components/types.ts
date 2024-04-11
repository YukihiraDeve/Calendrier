export interface Task {
    id: number;
    title: string;
    startTime: string; 
    endTime: string; 
    day: string; 
  }
  

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

  
  
 