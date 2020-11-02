import { TaskType, TasksType } from '../types';

class TaskService {
  get = async (): Promise<TasksType> => {
    const response = await fetch('http://localhost:4000/api/tasks');
    const tasks = await response.json();

    return tasks;
  };
}

const taskService = new TaskService();

export default taskService;
