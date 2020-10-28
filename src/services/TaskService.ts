import { functionsSubscribersType, functionSubscriberType, taskType, tasksType } from '../types/types';

class TaskService {
  functionsSubscribers: functionsSubscribersType = [];

  subscribe = (functionSubscriber: functionSubscriberType): void => {
    this.functionsSubscribers.push(functionSubscriber);
  };

  notify = (): void => {
    this.functionsSubscribers.forEach((functionSubscriber: functionSubscriberType): void => functionSubscriber());
  };

  getTasks = (): tasksType => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  };

  saveTasks = (tasks: tasksType): void => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  deleteTask = (id: number): void => {
    const tasks: tasksType = this.getTasks();
    const filteredTasks = tasks.filter((task: taskType): boolean => task.id !== id);

    this.saveTasks(filteredTasks);
    this.notify();
  };

  addTask = (taskDescription: string): void => {
    const tasks: tasksType = this.getTasks();
    const task: taskType = {
      id: Date.now(),
      taskDescription,
    };

    tasks.push(task);
    this.saveTasks(tasks);
    this.notify();
  };
}

const taskService = new TaskService();

export default taskService;
