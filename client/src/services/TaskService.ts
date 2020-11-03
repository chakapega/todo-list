import { FunctionsSubscribersType, FunctionSubscriberType, TaskType, TasksType } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { getTimeStamp } from '../utils';

class TaskService {
  functionsSubscribers: FunctionsSubscribersType = [];

  subscribe = (functionSubscriber: FunctionSubscriberType): void => {
    this.functionsSubscribers.push(functionSubscriber);
  };

  notify = (): void => {
    this.functionsSubscribers.forEach((functionSubscriber: FunctionSubscriberType): void => functionSubscriber());
  };

  get = async (): Promise<TasksType> => {
    const response = await fetch('http://localhost:4000/api/tasks');
    const tasks = await response.json();

    return tasks;
  };

  add = async (taskDescription: string): Promise<void> => {
    const task = {
      id: uuidv4(),
      taskDescription,
      date: getTimeStamp(),
    };

    await fetch('http://localhost:4000/api/add-task', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.notify();
  };

  deleteTask = async (id: string): Promise<void> => {
    await fetch('http://localhost:4000/api/delete-task', {
      method: 'DELETE',
      body: JSON.stringify({
        id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.notify();
  };
}

const taskService = new TaskService();

export default taskService;
