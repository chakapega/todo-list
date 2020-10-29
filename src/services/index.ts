import { FunctionsSubscribersType, FunctionSubscriberType, TaskType, TasksType } from '../types';

class TaskService {
  functionsSubscribers: FunctionsSubscribersType = [];

  subscribe = (functionSubscriber: FunctionSubscriberType): void => {
    this.functionsSubscribers.push(functionSubscriber);
  };

  notify = (): void => {
    this.functionsSubscribers.forEach((functionSubscriber: FunctionSubscriberType): void => functionSubscriber());
  };

  getTasks = (): TasksType => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  };

  saveTasks = (tasks: TasksType): void => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  deleteTask = (id: number): void => {
    const tasks: TasksType = this.getTasks();
    const filteredTasks = tasks.filter((task: TaskType): boolean => task.id !== id);

    this.saveTasks(filteredTasks);
    this.notify();
  };

  addTask = (taskDescription: string): void => {
    const tasks: TasksType = this.getTasks();
    const task: TaskType = {
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
