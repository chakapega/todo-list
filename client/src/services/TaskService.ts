import { TaskType, TasksType } from '../types';
import { v4 as uuidv4 } from 'uuid';

class TaskService {
  get = async (): Promise<TasksType> => {
    const response = await fetch('http://localhost:4000/api/tasks');
    const tasks = await response.json();

    return tasks;
  };

  add = (taskDescription: string): void => {
    const task = {
      id: uuidv4(),
      taskDescription,
      date: this.getTimeStamp(),
    };

    fetch('http://localhost:4000/api/add-task', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  getTimeStamp(): string {
    const currentDate = new Date();
    const [, , dayOfTheMonth, year, time] = currentDate.toString().split(' ');
    const month = currentDate.getMonth() + 1;

    return `${dayOfTheMonth}/${month}/${year} ${time}`;
  }
}

const taskService = new TaskService();

export default taskService;
