import { taskType, tasksType } from '../types/types';

export default class TaskService {
  getTasks(): tasksType {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }

  saveTasks(tasks: tasksType): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  deleteTask = (id: number): void => {
    const tasks: tasksType = this.getTasks();
    const filteredTasks = tasks.filter((task) => task.id !== id);

    this.saveTasks(filteredTasks);
  };

  addTask = (taskDescription: string): void => {
    const tasks: tasksType = this.getTasks();
    const task: taskType = {
      id: Date.now(),
      taskDescription,
    };

    tasks.push(task);
    this.saveTasks(tasks);
  };
}
