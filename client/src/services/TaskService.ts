import { TasksType } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { getTimeStamp } from '../utils';

class TaskService {
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
  };

  edit = async (id: string, taskDescription: string) => {
    const editedTask = {
      id,
      taskDescription,
      date: getTimeStamp(),
    };

    await fetch('http://localhost:4000/api/edit-task', {
      method: 'PUT',
      body: JSON.stringify(editedTask),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
}

const taskService = new TaskService();

export default taskService;
