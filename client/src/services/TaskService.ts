import { TasksType, TaskType } from '../types';
import { v4 as uuidv4 } from 'uuid';
import getDate from '../utils/getDate';

class TaskService {
  _baseApiUrl = 'http://localhost:4000/api';

  get = async () => {
    const response = await fetch(`${this._baseApiUrl}/tasks`);
    const tasks: TasksType = await response.json();

    return tasks;
  };

  add = async (taskDescription: string) => {
    const task: TaskType = {
      id: uuidv4(),
      taskDescription,
      date: getDate(),
    };

    await fetch(`${this._baseApiUrl}/add-task`, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  deleteTask = async (id: string) => {
    await fetch(`${this._baseApiUrl}/delete-task`, {
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
    const editedTask: TaskType = {
      id,
      taskDescription,
      date: getDate(),
    };

    await fetch(`${this._baseApiUrl}/edit-task`, {
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
